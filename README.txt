Rätselwelt V4.3.3
==================

Gezielte Korrekturen in dieser Version:

1. Sudoku
- Immer klassisches 9x9-Sudoku.
- Normale 3x3-Unterteilung mit deutlich stärkeren Trennlinien nach Spalte 3/6 und Zeile 3/6.
- Zahlen 1-9 sind jetzt die Standardansicht.
- Themen-Symbole bleiben optional umschaltbar; die Sudoku-Logik bleibt identisch.
- Leicht/Mittel/Knifflig unterscheiden sich nur über die Zahl der Vorgaben.
- Mehrere vorbereitete, eindeutig lösbare Rätsel pro Schwierigkeitsgrad.

2. Wortsuche
- Zu suchende Wörter deutlich grösser dargestellt.
- Gefundene Buchstaben zunächst gelb.
- Schneiden sich zwei gefundene Wörter, wechselt das gemeinsame Feld auf Türkis.
- Bei einer seltenen Dreifach-Überlappung wechselt es auf Violett.
- Diagonale und überlappende Wörter bleiben Bestandteil der schweren Generatorlogik.

3. Punkte verbinden
- Kontinuierliches Nachfahren mit dem Finger neu umgesetzt.
- Finger auf Punkt 1 setzen und auf dem Display weiterfahren.
- Die App verarbeitet auch schnelle Bewegungen und Zwischenpositionen (coalesced pointer events).
- Grössere unsichtbare Finger-Treffzone in Bildschirm-Pixeln statt kleiner Canvas-Pixel.
- Mehrere aufeinanderfolgende Punkte können in einer einzigen Fingerbewegung erkannt werden.
- Bei mehrteiligen Bildern kann der Finger auf dem Display bleiben; unsichtbare Übergänge werden nicht als Bildlinie gezeichnet.
- Der nächste Punkt wird mit einem Ring hervorgehoben.

Zielgerät:
- Galaxy Tab A11+ im Querformat / Vollbild.

Start:
- index.html öffnen.
