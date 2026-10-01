Rätselwelt V5
=============

V5 wurde gegenüber V4.3.x grundlegend neu aufgebaut.

Navigation
- 1 Schwierigkeit -> 2 Themenwelt -> 3 Spiel
- 4 Stufen: Leicht, Mittel, Knifflig, Pro
- Pro ist ausdrücklich auch für Erwachsene gedacht
- Querformat / 16:10 / grosses Tablet, ohne Seiten-Scroll

Sudoku
- immer klassisch 9x9 mit normalen 3x3-Blöcken
- Zahlen 1-9 als Standard
- optionale Symbolansicht passend zur Themenwelt
- Kandidaten-/Notizmodus: bis zu neun kleine Notizen pro Feld
- Undo
- Löschen
- automatische Entfernung einer gesetzten Kandidatenzahl aus Zeile, Spalte und Block
- aktuelles Sudoku wird lokal gespeichert
- Pro basiert auf einer eindeutig lösbaren 17-Hinweis-Struktur

Wortsuche
- gleiche gut lesbare Buchstabendarstellung in allen Stufen
- rechteckige Felder statt immer quadratisch
- Leicht 12x10 / Mittel 16x11 / Knifflig 18x13 / Pro 21x14
- Wörter können waagrecht, senkrecht, diagonal und rückwärts liegen
- Platzierung bevorzugt echte Kreuzungen
- 1 gefundenes Wort = gelb
- 2 überlappende Wörter = türkis
- 3+ Überlappungen = violett

Punkte verbinden
- echte Fingerbewegung: Finger auf Punkt 1 setzen und weiterfahren
- nicht nur einzelne Pointer-Events: komplette Strecke zwischen zwei Touchpositionen wird geprüft
- deutlich grössere Zahlen
- Zahlen werden neben den Punkten platziert und möglichst kollisionsfrei angeordnet
- mehrere Zeichenstriche werden abschnittsweise miteinander verzahnt; die Nummern springen dadurch bewusst kreuz und quer durchs Motiv
- Leicht ca. 48 / Mittel 65 / Knifflig 82 / Pro 105 Zielpunkte vor Kollisionsbereinigung
- 10 Motive pro Welt

Logik
- Zahlenfolgen
- wechselnde Operationen
- verschachtelte Reihen
- Fibonacci / Primzahlen / Fakultäten
- Buchstabenfolgen
- Matrizen
- Pro-Runden mit höherem Erwachsenen-Niveau

Quiz
- vier Schwierigkeitsniveaus
- eigene Fragen für Dschungel, Weltraum, Meer und Griechenland
- auf Pro fachlich deutlich anspruchsvoller
- falsche Antwort verrät nicht sofort die Lösung

Weitere Spiele
- Labyrinth: Pfad bleibt beim Loslassen erhalten; bereits besuchte Bereiche lösen keinen Sprung zurück aus
- Memory: bis 15 Paare in Pro
- Wortsalat mit längeren Begriffen

Stickeralbum
- 4 Seiten x 10 Sticker
- Freischaltung erst nach 6 Siegen UND 4 verschiedenen Rätselarten in derselben Welt

PWA
- manifest.webmanifest und sw.js sind enthalten
- bei Hosting z.B. auf GitHub Pages kann die Rätselwelt als App installiert und offline genutzt werden

Dateien
- index.html
- logo.svg
- manifest.webmanifest
- sw.js
- README.txt
