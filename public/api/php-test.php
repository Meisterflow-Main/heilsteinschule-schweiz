<?php
/**
 * Kurzer Server-Test. Nach dem Test wieder loeschen!
 * Ablage: public_html/api/php-test.php
 * Aufruf: https://heilsteinschule.swiss/api/php-test.php
 */

header('Content-Type: text/plain; charset=utf-8');

echo "PHP LAEUFT\n";
echo 'PHP-Version: ' . PHP_VERSION . "\n";
echo 'Server-Software: ' . ($_SERVER['SERVER_SOFTWARE'] ?? 'unbekannt') . "\n";
echo 'curl verfuegbar: ' . (function_exists('curl_init') ? 'JA' : 'NEIN') . "\n";
echo 'JSON verfuegbar: ' . (function_exists('json_encode') ? 'JA' : 'NEIN') . "\n";
echo 'Ausgehende Verbindungen: ';

if (function_exists('curl_init')) {
    $ch = curl_init('https://api.resend.com/domains');
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 10,
        CURLOPT_HTTPHEADER => ['Authorization: Bearer test'],
    ]);
    $body = curl_exec($ch);
    $status = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);
    if ($body === false) {
        echo "NEIN (" . $error . ")\n";
    } else {
        echo "JA (Antwort von Resend, HTTP " . $status . ")\n";
    }
} else {
    echo "nicht pruefbar\n";
}
