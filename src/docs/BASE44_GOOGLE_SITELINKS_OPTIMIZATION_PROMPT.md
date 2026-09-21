# BASE44 GOOGLE SITELINKS OPTIMIERUNGS PROMPT

> **Bestehende Website technisch und strukturell optimieren, damit Google bei Markensuche Sitelinks anzeigt**

---

## ZIEL

Optimiere die bestehende Website technisch und strukturell so, dass Google bei einer Markensuche möglichst wahrscheinlich zusätzliche **Sitelinks** unter dem Hauptsuchergebnis anzeigen kann.

> **WICHTIG:** Die Website-Inhalte, Seiten und Funktionen sind bereits vorhanden. Erstelle keine komplett neue Seitenstruktur und schreibe bestehende Inhalte nicht unnötig neu. Passe dich automatisch an das jeweilige Unternehmen, seine Branche, seine vorhandenen Seiten, Leistungen, Standorte und Inhalte an.

**Google entscheidet selbst**, ob Sitelinks angezeigt werden. Ziel ist es, der Suchmaschine eine möglichst klare Website-Struktur und Hierarchie zu geben.

---

## WEBSITE ANALYSIEREN

Analysiere zuerst die komplette bestehende Website.

Identifiziere automatisch die wichtigsten öffentlichen Hauptseiten des Unternehmens, zum Beispiel:

- Leistungen
- Produkte
- Services
- Preise
- Referenzen
- Projekte
- Über uns
- Kontakt
- Standorte
- Regionen
- Termin buchen
- Beratung
- FAQ
- Blog / Ratgeber

Welche Seiten priorisiert werden, muss sich automatisch nach dem jeweiligen Business und der vorhandenen Website richten.

**Bestimme daraus die wichtigsten 4–8 potentiellen Google-Sitelink-Seiten.**

---

## HAUPTNAVIGATION OPTIMIEREN

Prüfe, ob die wichtigsten Seiten direkt und eindeutig in der Hauptnavigation verlinkt sind.

- Verwende normale crawlbare HTML-Links. Bevorzuge: `<a href="/...">`
- Stelle sicher, dass die Navigation semantisch sauber aufgebaut ist, z. B. mit `<nav>`.
- **Verändere das bestehende Design nicht.**
- Keine unnötigen neuen Menüeinträge erstellen, wenn die entsprechenden Seiten bereits sinnvoll erreichbar sind.

---

## FOOTER OPTIMIEREN

Prüfe den Footer.

- Die wichtigsten Seiten des Unternehmens sollen dort ebenfalls klar verlinkt sein.
- Nutze nur bereits vorhandene relevante Seiten.
- **Keine Keyword-Spam-Links hinzufügen.**
- Der Footer soll Google helfen, die Informationsarchitektur der Website besser zu verstehen.

---

## SEO-TITLES PRÜFEN

Jede wichtige indexierbare Seite benötigt einen **individuellen und sinnvollen** SEO-Title.

Der Title soll automatisch zur jeweiligen Seite und zum Unternehmen passen.

Beispiele nach Seitentyp:

| Seitentyp | Title |
|---|---|
| Homepage | `[Unternehmensname] \| [Hauptleistung / Positionierung]` |
| Leistungsseite | `[Leistung] \| [Unternehmensname]` |
| Preisseite | `Preise & Angebote \| [Unternehmensname]` |
| Referenzen | `Referenzen & Kundenprojekte \| [Unternehmensname]` |
| Über uns | `Über [Unternehmensname]` |
| Kontakt | `Kontakt \| [Unternehmensname]` |

- Keine doppelten Titles.
- Keine Keyword-Überoptimierung.
- **Bestehende gute Titles nicht unnötig ändern.**

---

## META-DESCRIPTIONS

Prüfe alle wichtigen Seiten auf eindeutige Meta-Descriptions.

Vermeide: generische Texte · automatisch abgeschnittene Seitentexte · doppelte Meta-Descriptions · technische Platzhalter · Formulierungen wie „Page on Website...".

Erstelle nur dann neue Meta-Descriptions, wenn die bestehende Version fehlt, doppelt, technisch oder offensichtlich ungeeignet ist.

**Die Description soll jeweils natürlich zum Business und Seitentyp passen.**

---

## H1-STRUKTUR

Prüfe jede wichtige Seite.

- Jede Seite soll eine **eindeutige primäre H1** besitzen.
- Die H1 soll klar beschreiben, worum es auf der Seite geht.
- Bestehende gute H1-Texte nicht unnötig verändern.
- **Keine künstlichen SEO-H1s hinzufügen.**

---

## INTERNE VERLINKUNG

Verbessere die interne Verlinkung zwischen wichtigen Seiten.

Verlinke logisch verwandte Seiten miteinander. Beispiele:

- Leistungen → Preise
- Leistungen → Referenzen
- Leistungen → Kontakt
- Referenzen → relevante Leistungen
- Preise → Leistungen
- Über uns → Referenzen oder Kontakt
- Blogartikel → passende Leistungen oder Produkte

- Passe die Verlinkung automatisch an die tatsächliche Website-Struktur an.
- **Keine unnatürlichen Keyword-Ankertexte.**
- **Keine übermässige Verlinkung.**

---

## BREADCRUMBS

Implementiere auf geeigneten Unterseiten eine klare Breadcrumb-Struktur.

Beispiele:

```
Home > Leistungen
Home > Leistungen > Leistung XY
Home > Produkte > Produkt XY
Home > Referenzen > Projekt XY
Home > Standorte > Standort XY
```

- Die Breadcrumbs müssen automatisch zur tatsächlichen Seitenstruktur passen.
- **Bestehendes Design nicht negativ verändern.**

---

## BREADCRUMBLIST SCHEMA

Implementiere korrektes JSON-LD `BreadcrumbList` Structured Data auf passenden Unterseiten.

Beispiel:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://domain.ch/" },
    { "@type": "ListItem", "position": 2, "name": "Leistungen", "item": "https://domain.ch/leistungen" }
  ]
}
```

- Die Werte müssen dynamisch von der jeweiligen Website und Seite übernommen werden.
- **Keine erfundenen URLs verwenden.**

---

## ORGANIZATION / LOCALBUSINESS SCHEMA

Prüfe, welches Structured-Data-Schema zum Unternehmen passt.

Mögliche Typen: `Organization` · `LocalBusiness` · `ProfessionalService` · `Store` · `MedicalBusiness` · `BeautySalon` · `Restaurant` · `AutoRepair` oder ein anderer passender Schema.org-Typ.

Verwende vorhandene Unternehmensinformationen wie: Name · Website · Logo · Adresse · Telefonnummer · Öffnungszeiten · Social-Media-Profile · Standort.

> **Keine Informationen erfinden. Nur Daten verwenden, die bereits auf der Website vorhanden sind.**

---

## WEBSITE SCHEMA

Prüfe, ob auf der Homepage sauberes `WebSite` Structured Data vorhanden ist.

Falls nicht, implementiere:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "[Unternehmensname]",
  "url": "[Homepage URL]"
}
```

**Nutze nur echte vorhandene Daten.**

---

## CANONICAL TAGS

Prüfe alle indexierbaren Seiten auf korrekte Canonical-Tags.

Jede wichtige Seite soll in der Regel einen passenden **Self-Canonical** besitzen.

Achte besonders auf: Filterparameter · Kategorien · Sortierungen · Tracking-Parameter · Pagination · dynamische URLs · doppelte Seitenvarianten.

- Verhindere, dass technisch erzeugte Varianten unnötig mit den Hauptseiten konkurrieren.
- **Keine bestehenden URLs ändern, wenn dies nicht notwendig ist.**

---

## INDEXIERBARKEIT

Prüfe, ob die wichtigen öffentlichen Seiten:

- crawlbar
- indexierbar
- nicht auf `noindex`
- nicht versehentlich durch `robots.txt` blockiert

sind.

Besonders wichtig: Homepage · Hauptleistungen · Produkte · Referenzen · Preise · Über uns · Kontakt · Standorte · wichtige Landingpages.

---

## UNWICHTIGE SEITEN NICHT PRIORISIEREN

Technische Seiten sollen Google **nicht** als wichtige Sitelinks erscheinen.

Beispiele: Login · Register · Passwort zurücksetzen · Admin · Dashboard · interne Suchseiten · Warenkorb · Checkout · Kundenportal · technische Utility-Seiten.

- Prüfe diese Seiten auf sinnvolle SEO-Behandlung.
- **Keine funktionale Seite deaktivieren.**
- **Keine Seite automatisch auf `noindex` setzen**, wenn dies Risiken für bestehende Prozesse erzeugt.

---

## XML SITEMAP

Prüfe die XML-Sitemap.

- Wichtige indexierbare Seiten sollen enthalten sein.
- Unwichtige technische Seiten sollen nach Möglichkeit nicht Teil der SEO-Sitemap sein.
- **Die Sitemap muss die tatsächliche Website-Struktur widerspiegeln.**

---

## SEMANTISCHES HTML

Prüfe die wichtigsten Layout-Bereiche auf semantisch sinnvolles HTML.

Verwende wenn passend: `<header>` · `<nav>` · `<main>` · `<section>` · `<article>` · `<footer>`.

**Bestehendes Design darf dadurch nicht verändert werden.**

---

## KLARE INFORMATIONSARCHITEKTUR

Google soll die Hierarchie der Website eindeutig erkennen können.

Die Struktur soll möglichst logisch sein:

```
Homepage → Hauptkategorien → Unterseiten → Detailseiten
```

Beispiele:

```
Home → Leistungen → Leistung XY
Home → Produkte → Produkt XY
Home → Referenzen → Projekt XY
Home → Standorte → Standort XY
```

**Passe dies automatisch an die tatsächliche Website an.**

---

## KEINE SITELINKS ERZWINGEN

> **WICHTIG:** Google entscheidet automatisch, ob und welche Sitelinks angezeigt werden.

- Keine Fake-Sitelinks erstellen.
- Keine versteckten Links.
- Kein Keyword-Stuffing.
- Keine manipulativen SEO-Techniken.

**Ziel ist ausschliesslich:**

- klare Website-Struktur
- starke interne Verlinkung
- saubere Meta-Daten
- semantisches HTML
- Structured Data
- korrekte Canonicals
- gute Crawlability
- klare Seitenhierarchie

---

## BESTEHENDE WEBSITE SCHÜTZEN

> **Sehr wichtig:**

- Design nicht verändern
- bestehende Inhalte nicht unnötig umschreiben
- keine Funktionen entfernen
- keine Formulare verändern
- kein Tracking entfernen
- keine Buchungssysteme verändern
- keine bestehenden URLs ohne zwingenden Grund ändern
- keine Rankings durch unnötige URL-Änderungen gefährden
- keine neuen Seiten erstellen, wenn bereits passende Seiten vorhanden sind

**Arbeite primär mit der bestehenden Website.**

---

## AUTOMATISCH AN DAS BUSINESS ANPASSEN

Dieser Auftrag ist allgemein formuliert. Analysiere deshalb selbstständig:

- Branche
- Unternehmensart
- Leistungen
- Produkte
- Zielgruppe
- Standorte
- vorhandene Seiten
- Seitenhierarchie
- bestehende Navigation

Leite daraus selbstständig ab, welche Seiten für dieses konkrete Unternehmen die wichtigsten Google-Sitelink-Kandidaten sind.

**Keine festen Seitenbezeichnungen erzwingen, wenn sie zum jeweiligen Business nicht passen.**

---

## ABSCHLUSSBERICHT

Nach der Umsetzung erstelle eine kurze Zusammenfassung:

- Welche Seiten als wichtigste Sitelink-Kandidaten erkannt wurden
- Welche Titles optimiert wurden
- Welche Meta-Descriptions optimiert wurden
- Welche internen Verlinkungen verbessert wurden
- Welche Breadcrumbs umgesetzt wurden
- Welche Structured Data hinzugefügt oder korrigiert wurden
- Welche Canonicals geprüft oder angepasst wurden
- Ob Sitemap und robots.txt korrekt sind
- Welche technischen SEO-Probleme gefunden wurden
- Welche Punkte bewusst nicht verändert wurden, um bestehende Funktionen oder Rankings zu schützen

---

## WICHTIGES ENDERGEBNIS

> Die bestehende Website soll nach der Optimierung für Google eine deutlich verständlichere Seitenhierarchie besitzen, damit Google bei einer Suche nach dem Unternehmens- oder Markennamen relevante Unterseiten als **organische Sitelinks** auswählen kann.