<?php
/**
 * Formular-Endpunkt fuer heilsteinschule.swiss
 * Nimmt das JSON der Website-Formulare entgegen und versendet die Anfrage per Resend.
 *
 * Ablage auf dem Hosting: public_html/api/send-anfrage.php
 * Resend-Schluessel:     /home/BENUTZER/resend-key.php  (eine Ebene ueber public_html)
 *                        Inhalt:  <?php return 're_...';
 */

declare(strict_types=1);

// ---------------------------------------------------------------- Konfiguration
$RECIPIENTS = ['anfragen@heilsteinschule.ch'];
$FROM_EMAIL = 'anfragen@heilsteinschule.ch';   // muss auf der in Resend verifizierten Domain liegen
$FROM_NAME  = 'Heilsteinschule Schweiz';
$ALLOWED_ORIGINS = [
    'https://heilsteinschule.swiss',
    'https://www.heilsteinschule.swiss',
];
$TOPICS = ['Kontaktanfrage', 'Infoanlass', 'Seminar', 'Anmeldung Grundausbildung', 'Terminanfrage Laden'];

// ---------------------------------------------------------------------- Helfer
function resend_key(): string
{
    $env = getenv('RESEND_API_KEY');
    if (is_string($env) && trim($env) !== '') {
        return trim($env);
    }
    $candidates = [
        dirname(__DIR__, 2) . '/resend-key.php', // eine Ebene ueber public_html
        __DIR__ . '/resend-key.php',
    ];
    foreach ($candidates as $file) {
        if (is_file($file)) {
            $key = include $file;
            if (is_string($key) && trim($key) !== '') {
                return trim($key);
            }
        }
    }
    return '';
}

function esc(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function respond(int $status, array $payload, array $allowedOrigins): void
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin !== '' && in_array($origin, $allowedOrigins, true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Vary: Origin');
    }
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

// ------------------------------------------------------------------ CORS / Methode
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array($origin, $ALLOWED_ORIGINS, true)) {
    respond(403, ['error' => 'Origin nicht erlaubt.'], $ALLOWED_ORIGINS);
}
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    respond(204, [], $ALLOWED_ORIGINS);
}
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['error' => 'Nur POST erlaubt.'], $ALLOWED_ORIGINS);
}

// ----------------------------------------------------------------------- Eingabe
$raw = file_get_contents('php://input') ?: '{}';
$body = json_decode($raw, true);
if (!is_array($body)) {
    respond(400, ['error' => 'Ungueltige Anfrage.'], $ALLOWED_ORIGINS);
}

$topic   = in_array((string)($body['topic'] ?? ''), $TOPICS, true) ? (string)$body['topic'] : 'Kontaktanfrage';
$name    = trim((string)($body['name'] ?? ''));
$email   = trim((string)($body['email'] ?? ''));
$phone   = trim((string)($body['phone'] ?? ''));
$message = trim((string)($body['message'] ?? ''));
$trap    = trim((string)($body['hp_trap'] ?? ''));

$name    = mb_substr($name, 0, 120);
$email   = mb_substr($email, 0, 160);
$phone   = mb_substr($phone, 0, 60);
$message = mb_substr($message, 0, 4000);

if ($trap !== '') {
    // Honeypot gefuellt: still als Erfolg beantworten, nichts senden.
    respond(200, ['ok' => true, 'sent' => 0], $ALLOWED_ORIGINS);
}
if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, ['error' => 'Name, E-Mail und Nachricht sind erforderlich.'], $ALLOWED_ORIGINS);
}
if ($phone === '') {
    $phone = 'nicht angegeben';
}

// ------------------------------------------------------------------------- Versand
$apiKey = resend_key();
if ($apiKey === '') {
    error_log('send-anfrage: RESEND_API_KEY nicht gesetzt');
    respond(500, ['error' => 'E-Mail-Versand ist nicht konfiguriert.'], $ALLOWED_ORIGINS);
}

$timestamp = (new DateTime('now', new DateTimeZone('Europe/Zurich')))->format('d.m.Y H:i');
$subject = $topic . ' – ' . $name;
$html = '<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#2a1b4b;line-height:1.6">'
    . '<h2 style="margin:0 0 16px;font-size:19px;color:#2a1b4b">Neue ' . esc($topic) . '</h2>'
    . '<table style="border-collapse:collapse;margin-bottom:18px">'
    . '<tr><td style="padding:3px 16px 3px 0;color:#665e78">Name</td><td style="padding:3px 0"><strong>' . esc($name) . '</strong></td></tr>'
    . '<tr><td style="padding:3px 16px 3px 0;color:#665e78">E-Mail</td><td style="padding:3px 0">' . esc($email) . '</td></tr>'
    . '<tr><td style="padding:3px 16px 3px 0;color:#665e78">Telefon</td><td style="padding:3px 0">' . esc($phone) . '</td></tr>'
    . '<tr><td style="padding:3px 16px 3px 0;color:#665e78">Eingang</td><td style="padding:3px 0">' . esc($timestamp) . '</td></tr>'
    . '</table>'
    . '<div style="border-top:1px solid #e5e7eb;padding-top:16px;white-space:pre-wrap">' . esc($message) . '</div>'
    . '</div>';

$payload = [
    'from' => $FROM_NAME . ' <' . $FROM_EMAIL . '>',
    'to' => $RECIPIENTS,
    'reply_to' => $email,
    'subject' => $subject,
    'html' => $html,
];

$sent = 0;
$lastError = '';
foreach ($RECIPIENTS as $recipient) {
    $payload['to'] = [$recipient];
    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . $apiKey,
            'Content-Type: application/json',
        ],
        CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
    ]);
    $response = curl_exec($ch);
    $status = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($response !== false && $status >= 200 && $status < 300) {
        $sent++;
    } else {
        $lastError = $curlError !== '' ? $curlError : ('HTTP ' . $status . ' ' . (string)$response);
        error_log('send-anfrage: Resend-Fehler an ' . $recipient . ': ' . $lastError);
    }
}

if ($sent === 0) {
    respond(502, ['error' => 'E-Mail konnte nicht versendet werden.'], $ALLOWED_ORIGINS);
}

respond(200, ['ok' => true, 'sent' => $sent], $ALLOWED_ORIGINS);
