# PRD — m.oliseee.11.17 Carbon Black Website

## Original Problem Statement (Deutsch)
"Erstelle eine moderne, hochwertige Website für meinen YouTube-Kanal, mit einem eleganten Carbon-Schwarz-Design, dunklem Hintergrund, dezenten Carbon-Faser-Strukturen, passenden Animationen und einem professionellen Look; verlinke meinen YouTube-Kanal: https://youtube.com/@oliseee1117"

## User Choices (ask_human)
- Kanal-Thema: **Edits**
- Bereiche: **Vollpaket**: Hero, Über mich, Videos, Kanal-Link, Kontakt/Social
- **Ja, Video-Sektion mit Embeds**
- **Nein, nur YouTube** (keine weiteren Social-Links)

## Persona
Anil/Freze ("m.oliseee.11.17", @oliseee1117): Edit-Creator (1.31K Abonnenten, Videos auf Englisch, Motto "Nah, imma do my own think.", Collab über Discord-Tag YTFreze987). Ziel: eine Portfolio-artige Showcase-Seite, die Edit-Kultur ästhetisch übersetzt und Zuschauer zum Kanal führt.

## Architektur
- **Frontend**: CRA + React 19 + Tailwind, framer-motion 11, lenis 1.3 (Smooth Scroll), lucide-react Icons. Kein Router nötig — Single Page mit Anker-Navigation über Lenis-Scroll.
- **Backend**: unverändert (Template health route `/api`). Die Seite ist statisch; keine DB nötig.
- **Design**: /app/design_guidelines.json — "Stealth Carbon & Kinetic Crimson" (#060709 Hintergrund, #FF2E00 Akzent, #00E5FF Sekundär), Fonts: Outfit (Display), Plus Jakarta Sans (Body), JetBrains Mono (Labels). Carbon-Faser-Struktur als Dot-Matrix + Diagonal-Weave (`.bg-carbon`), Film-Grain-Overlay, Custom-Cursor-Ring.

## Kernanforderungen (statisch)
1. Kinetic Hero mit Masked Line-by-Line Reveal, Eyebrow = echtes Kanal-Motto, Metric-Chips, 3D-Tilt-Video-Karte (Mouse-Spring + Scroll-Parallax).
2. Slow Editorial Marquee (Outlined Display Type, Hover → Crimson).
3. Über-mich-Bento: Bio mit echtem Zitat, echte Stats (1.31K+ Abos, 1.210 Views), Craft-Tags (stilisiert, keine erfundenen Fakten), Portrait-Bild mit Spotlight.
4. Video-Sektion mit ECHTEM Kanalvideo: "Olise is different | Olise edit" (ID kOiFUeLBZJ4), Click-to-Play Embed (youtube-nocookie), echtes Thumbnail, echte Meta (Views/Datum), Direkt-Link zu YouTube.
5. CTA-Banner "Werde Teil der Community" → YouTube + echter Collab-Tag.
6. Footer mit Logo, Navigation, YouTube-Link, Online-Status, Back-to-Top.
7. Custom SVG-Hex-Carbon-Lattice-Logo (auch Favicon /logo.svg).
8. data-testids auf allen interaktiven Elementen.

## Implementiert (2026-10-05)
- Alle 7 Sektionen, Lenis-Smooth-Scroll + Anker-Handling, CarbonCursor, ErrorBoundary, Grain-Overlay, Marquee-Keyframes, Viewfinder-Corner-Brackets, Scroll-Hint-Animation.
- Fonts via Google-Fonts-Link in public/index.html; Tailwind-Font-/-Color-Tokens ergänzt.

## Verifikation
- Webpack kompiliert fehlerfrei; Desktop 1440px + Mobile 390px Screenshots OK, kein Horizontal-Overflow; Play-Click erzeugt Iframe; alle Anker/Buttons vorhanden.
- Embed-Playback aus der Pod-Umgebung durch YouTubes Datacenter-Bot-Wall blockiert ("This content isn't available" / serverseitig "Sign in to confirm you're not a bot"). oEmbed 200 + Thumbnail laden bestätigen Embeddability — Playback im normalen Heim-Netzwerk erwartet funktional; Direkt-Link als Fallback vorhanden.

## Backlog (P1/P2)
- P1: Automatischer Feed-Import (RSS des Kanals → mehr Videos in der Grid, sobald mehrere Uploads existieren).
- P2: Sprachumschaltung DE/EN, OG-Share-Image, Impressum/Datenschutz (wenn Site live geht).
