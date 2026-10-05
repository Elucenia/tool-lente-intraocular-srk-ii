<!-- ELUCENIA technical documentation · lente-intraocular-srk-ii · de · no clinical/professional/rights approval -->

# SRK II: historisches Lehrmodell

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/lente-intraocular-srk-ii)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### A-Konstante der Linse

`a`

Bereich: 110–125

### Axiallänge

`al`

mm · Bereich: 15–40

### Mittlere Keratometrie (K)

`k`

D · Bereich: 30–60

### Gewünschte postoperative Refraktion

`alvo`

D · optional · Bereich: -6–3

### Historische/didaktische Nutzung der SRK-II-Formel, ohne Implantatauswahl für eine Operation?

`contexto`

- `0` — Nein
- `1` — Ja

## Fassung der Methode

SRK II 1988; historische Umsetzung für Lehrzwecke

## Dokumentierte Formel

P = angepasstes A − 2,5 L − 0,9 K. A-Anpassung: +3 wenn L \< 20; +2 wenn L \< 21; +1 wenn L \< 22; 0 wenn L \< 24,5; sonst −0,5. Zielrefraktion: R × 1,25 abziehen, wenn P \> 14, sonst R bei P ≤ 14.

## Grenzen und Population

Historisches Modell mit begrenzter Genauigkeit, besonders bei kurzen und langen Augen. Integriert weder moderne Biometrie noch optimierte Konstanten und wählt keine Linse für eine Operation.

## Referenzen

- [Echo-Son · PIROP-PAB33-Handbuch Rev.9 · 2020 · Abschnitt 10.2](https://3boptic.com/manuales/PIROP_UserManual_PAB33_9_1.pdf)

- [Sanders DR, Retzlaff J, Kraff MC. Comparison of the SRK II formula and other second generation formulas. J Cataract Refract Surg, 1988.](https://doi.org/10.1016/S0886-3350(88)80087-7)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
