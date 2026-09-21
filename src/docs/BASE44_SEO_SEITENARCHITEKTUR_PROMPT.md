# BASE44 SEO SEITENARCHITEKTUR UND NAVIGATIONS PROMPT

> **Komplette SEO-Seitenarchitektur & Navigationsstruktur für bestehende oder im Aufbau befindliche Websites**

---

## AUSGANGSLAGE

Die Website wurde bereits erstellt oder befindet sich im Aufbau.
Deine Aufgabe ist es, die komplette Seitenarchitektur **SEO sauber** zu strukturieren.

**Wichtig:**

- Alle wichtigen Dienstleistungen müssen als eigene Seiten existieren.
- Alle wichtigen Orte müssen als eigene Standortseiten existieren.
- Alle wichtigen Dienstleistung-plus-Ort-Seiten müssen logisch in die Website eingebunden werden.
- **Keine SEO-Seite darf isoliert sein.**
- **Keine wichtige Seite darf nur existieren, aber nicht erreichbar sein.**
- Google und Nutzer müssen die komplette Struktur klar verstehen.

---

## ZIEL

Baue eine klare SEO-Architektur mit folgenden Ebenen:

```
Homepage
├── Dienstleistungen
│   ├── Einzelne Dienstleistungsseiten
│   └── ...
├── Standorte
│   ├── Einzelne Standortseiten
│   └── ...
├── Dienstleistung + Ort Landingpages (Money Pages)
├── Kontakt
├── FAQ
├── Impressum
└── Datenschutz
```

---

## KRITISCHE REGEL

Erstelle **keine losen Seiten ohne interne Verlinkung**.

Jede Seite muss mindestens über eine dieser Strukturen erreichbar sein:

- Navigation
- Footer
- Dienstleistungsübersicht
- Standortübersicht
- Interne Links auf verwandten Seiten
- Breadcrumbs
- Sitemap

---

## HAUPTNAVIGATION

Die Hauptnavigation muss enthalten:

- Home
- Dienstleistungen
- Standorte
- Über uns
- Kontakt

Unter **Dienstleistungen** müssen alle Hauptdienstleistungen sichtbar oder über eine Übersichtsseite erreichbar sein.

Unter **Standorte** müssen alle wichtigen Orte sichtbar oder über eine Übersichtsseite erreichbar sein.

---

## DIENSTLEISTUNGS-ARCHITEKTUR

Erstelle eine Hauptseite: `/dienstleistungen/`

Diese Seite ist die Übersicht für alle Dienstleistungen. Dort müssen alle Dienstleistungen als eigene Karten oder Abschnitte erscheinen. Jede Dienstleistung muss auf eine eigene Seite verlinken.

```
/dienstleistungen/
/dienstleistungen/dienstleistung-1/
/dienstleistungen/dienstleistung-2/
/dienstleistungen/dienstleistung-3/
```

### Jede Dienstleistungsseite muss enthalten:

- H1 mit Dienstleistung
- Beschreibung der Dienstleistung
- Vorteile
- Ablauf
- Preisfaktoren
- FAQ
- CTA
- Links zu passenden Standortseiten
- Links zu passenden Dienstleistung-plus-Ort-Seiten

---

## REGIONEN-ARCHITEKTUR

Erstelle eine Hauptseite: `/regionen/`

Diese Seite ist die Übersicht für alle Zielorte. Dort müssen alle Orte als eigene Karten oder Abschnitte erscheinen. Jeder Ort muss auf eine eigene Standortseite verlinken.

```
/standorte/
/standorte/zuerich/
/standorte/wallisellen/
/standorte/oerlikon/
```

### Jede Standortseite muss enthalten:

- H1 mit Branche + Ort
- Lokaler Bezug
- Quartiere
- Nachbarorte
- Erreichbarkeit
- Fahrzeit
- ÖV (falls relevant)
- Dienstleistungen in diesem Ort
- FAQ
- CTA
- Links zu passenden Dienstleistungsseiten
- Links zu passenden Dienstleistung-plus-Ort-Seiten

---

## MONEY PAGE ARCHITEKTUR

Erstelle für wichtige Dienstleistung-plus-Ort-Kombinationen eigene Money Pages.

Beispiel: `/[dienstleistung]-[ort]/`

Diese Seiten müssen für **kaufstarke Suchbegriffe** optimiert sein.

### Jede Money Page muss intern verlinkt sein von:

- Dienstleistungsseite
- Standortseite
- Dienstleistungsübersicht (falls relevant)
- Standortübersicht (falls relevant)
- Footer (falls besonders wichtig)

**Keine Money Page darf isoliert sein.**

---

## INTERNE VERLINKUNG

Setze folgende interne Verlinkung um:

### Homepage verlinkt auf:

- `/dienstleistungen/`
- `/standorte/`
- wichtigste Dienstleistungsseiten
- wichtigste Standortseiten
- wichtigste Money Pages

### Dienstleistungsübersicht verlinkt auf:

- alle Dienstleistungsseiten
- Top Money Pages
- Kontakt

### Standortübersicht verlinkt auf:

- alle Standortseiten
- Top Money Pages
- Kontakt

### Dienstleistungsseiten verlinken auf:

- Dienstleistungsübersicht
- relevante Standortseiten
- relevante Money Pages
- verwandte Dienstleistungen
- Kontakt

### Standortseiten verlinken auf:

- Standortübersicht
- relevante Dienstleistungsseiten
- relevante Money Pages
- Nachbarorte
- Kontakt

### Money Pages verlinken auf:

- passende Dienstleistungsseite
- passende Standortseite
- verwandte Money Pages
- Kontakt

---

## URL-STRUKTUR

Nutze eine saubere URL-Struktur.

### Empfohlene Struktur:

```
/dienstleistungen/
/dienstleistungen/[dienstleistung]/
/standorte/
/standorte/[ort]/
/[dienstleistung]-[ort]/
/kontakt/
/ueber-uns/
/faq/
/impressum/
/datenschutz/
```

### Wichtig:

- URLs sollen kurz, klar und SEO-freundlich sein
- Keine kryptischen URLs
- Keine Grossbuchstaben
- Keine Umlaute in URLs
- Verwende `ae`, `oe`, `ue`
- Verwende `ss` statt `ß`

---

## BREADCRUMBS

Erstelle Breadcrumbs für alle wichtigen Seiten.

Beispiele:

```
Home > Dienstleistungen
Home > Dienstleistungen > [Dienstleistung]
Home > Standorte
Home > Standorte > [Ort]
Home > [Dienstleistung] [Ort]
```

Breadcrumbs müssen für Nutzer und Google sichtbar sein.

---

## FOOTER-STRUKTUR

Der Footer muss enthalten:

- Wichtigste Dienstleistungen
- Wichtigste Standorte
- Kontakt
- Telefon
- E-Mail
- Adresse
- Impressum
- Datenschutz
- Cookie-Einstellungen (falls vorhanden)

Die Footer-Links sollen die SEO-Architektur unterstützen.

---

## SITEMAP UND INDEXIERUNG

Stelle sicher:

- Alle wichtigen Seiten sind in der Sitemap
- Alle SEO-Seiten sind indexierbar
- Keine wichtigen Seiten sind auf `noindex`
- Keine wichtigen Seiten sind nur über Buttons ohne Link erreichbar
- Keine wichtigen Seiten sind versteckt

---

## QUALITÄTSKONTROLLE

Prüfe am Ende:

- [ ] Existiert `/dienstleistungen/`?
- [ ] Existiert für jede Dienstleistung eine eigene Seite?
- [ ] Existiert `/standorte/`?
- [ ] Existiert für jeden wichtigen Ort eine eigene Seite?
- [ ] Existieren die wichtigsten Money Pages?
- [ ] Sind alle Seiten intern verlinkt?
- [ ] Sind alle Seiten in Navigation, Footer oder Übersichtsseiten erreichbar?
- [ ] Gibt es Breadcrumbs?
- [ ] Sind URLs sauber?
- [ ] Sind alle SEO-Seiten indexierbar?
- [ ] Gibt es keine isolierten Seiten?

---

## AUSGABE

Erstelle am Ende eine Tabelle:

| Seite | URL | Seitentyp | Verlinkt von | Verlinkt zu | Status |
|---|---|---|---|---|---|

### Status-Werte:

- `OK`
- `FEHLT`
- `MUSS VERLINKT WERDEN`
- `MUSS ERSTELLT WERDEN`

---

## ABSCHLIESSENDE AUFGABE

Setze die Seitenarchitektur so um, dass Google klar erkennt:

- Welche Dienstleistungen angeboten werden
- Welche Orte bedient werden
- Welche Seiten die wichtigsten Money Pages sind
- Welche Seiten zusammengehören

Die Website muss wie eine **professionelle Local-SEO-Website** aufgebaut sein.

**Nicht** wie eine einfache One-Page-Website.
**Nicht** wie eine Sammlung loser Seiten.
**Sondern** wie eine klare, skalierbare SEO-Architektur für lokale Rankings.