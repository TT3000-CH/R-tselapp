RAETSELWELT V5.3.1 - ANZEIGE-FIX

GITHUB-UPLOAD
1. Dieses ZIP entpacken. Es gibt keinen zusaetzlichen Unterordner.
2. index.html, logo.svg, manifest.webmanifest und sw.js gemeinsam
   im bisherigen GitHub-Pages-Verzeichnis ersetzen und speichern (Commit).
3. Nach der Bereitstellung die Raetselwelt-Seite neu laden.
4. Oben links muss V5.3.1 stehen. Sonst ist noch nicht die neue Datei geladen.

README.txt und PRUEFPROTOKOLL.txt sind optional und keine Programmdateien.
Das ZIP selbst nicht als Ersatz fuer die einzelnen Dateien hochladen.

KORREKTUR
- Fehlende Hilfsfunktion varColor ergaenzt. Ihr Aufruf hatte beide
  Zeichenroutinen in V5.3 mit ReferenceError abgebrochen.
- Punktebild: kompletter Zeichenablauf laeuft wieder.
- Labyrinth: START/ZIEL sind zusaetzliche, gut lesbare HTML-Beschriftungen
  an den korrekten Ein- und Ausgaengen; sie werden beim Skalieren mitgefuehrt.
- Zeichenflaechen werden aus dem verfuegbaren Fenster gemessen.
  Bildschirmpixeldichte, Browserleisten, Vollbild und Groessenaenderungen
  werden beruecksichtigt, ohne die laufende Route zu loeschen.
- Punktnummern bleiben in Bildschirm-Pixeln gleich gross.
- Durchgehende Touchbewegungen sowie Loslassen und Fortsetzen getestet.
- Unerwartete Zeichenfehler zeigen eine Meldung mit erneutem Startversuch
  statt einer kommentarlos weissen Flaeche.

DATEN
Vorhandene Speicher-Schluessel fuer Sterne, Sticker und Sudoku bleiben gleich.
Das Update loescht diese Daten nicht. Bitte nicht vorsorglich alle Website-Daten
loeschen. Die HTML enthaelt das Logo bereits eingebettet; fuer die PWA trotzdem
alle vier Programmdateien gemeinsam hochladen.

VERSION
5.3.1 / 5.3.1-renderfix-20261002
