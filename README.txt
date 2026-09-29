Rätselwelt V4.3 Final
=====================

Optimiert für Galaxy Tab A11+ im Querformat (16:10).

Start
-----
1. ZIP entpacken
2. index.html im Browser öffnen
3. für die beste Darstellung Vollbild verwenden

Wichtigste Änderungen dieser V4.3
----------------------------------

STARTSEITE
- bewusst reduziert auf 3 Schritte:
  1. Schwierigkeit
  2. Welt
  3. Spiel
- weniger Begleittext
- Stickeralbum separat oben erreichbar

SUDOKU
- Leicht: 4x4 mit 2x2-Blöcken
- Mittel: 6x6 mit 2x3-Blöcken
- Knifflig: klassisches 9x9-Sudoku mit 3x3-Blöcken
- umschaltbar zwischen Welt-Symbolen und klassischen Zahlen
- bei 9x9 Zahlen 1-9
- Konflikte werden markiert, die richtige Lösung aber nicht automatisch verraten
- eigener Prüfen-Button
- generierte Aufgaben werden auf eindeutige Lösbarkeit geprüft

LOGIKREIHEN
- deutlich grössere Aufgabenvielfalt
- konstante und wachsende Abstände
- alternierende Regeln
- verschachtelte Reihen
- zwei ineinander laufende Folgen
- Quadrate, Fakultäten und Multiplikationsmuster
- Buchstabenfolgen
- Symbol- und Mini-Matrix-Aufgaben
- falsche Antwort zeigt nicht automatisch die Lösung
- gewertet wird der erste Versuch

QUIZ
- anspruchsvollere Wissens- und Schlussfolgerungsfragen
- pro Welt und Schwierigkeitsgrad eigene Fragenpools
- falsche Antwort verrät die richtige Lösung nicht
- gewertet wird der erste Versuch

WORTSUCHE
- gesuchte Wörter dürfen und sollen sich kreuzen
- Überlappungen werden vom Generator aktiv bevorzugt
- alle 8 Richtungen möglich
- Diagonalen werden besonders auf Mittel/Knifflig bevorzugt
- grössere Gitter und längere Begriffe

PUNKTE VERBINDEN
- 10 Motive je Welt / 40 insgesamt
- komplexe, mehrteilige Motive mit Innenlinien
- 60+ Punkte in den getesteten Motiven
- globale Abstandsprüfung verhindert überlappende Punktmarker

STICKERALBUM
- 4 Seiten mit je 10 Stickern
- ein Sticker benötigt jetzt gleichzeitig:
  - mindestens 4 erfolgreich abgeschlossene Runden in derselben Welt
  - mindestens 3 unterschiedliche Spielarten
- Fortschritt bleibt lokal im Browser gespeichert

LABYRINTH
- der gezeichnete Weg bleibt beim Loslassen des Fingers erhalten
- am letzten erreichten Feld kann weitergefahren werden
- frühere Wegpunkte können zum Zurücksetzen der Route angetippt werden

Technik
-------
- komplett lokal/offline nutzbar
- keine externen Bibliotheken nötig
- Fortschritt, Sterne und Sticker werden in localStorage gespeichert
