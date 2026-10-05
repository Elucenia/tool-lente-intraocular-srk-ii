<!-- ELUCENIA technical documentation · lente-intraocular-srk-ii · en · no clinical/professional/rights approval -->

# SRK II: historical educational model

[conditions, sources and permissions](https://elucenia.org/en/tools/lente-intraocular-srk-ii)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Lens A constant

`a`

range: 110–125

### Axial length

`al`

mm · range: 15–40

### Mean keratometry (K)

`k`

D · range: 30–60

### Target postoperative refraction

`alvo`

D · optional · range: -6–3

### Historical/educational use of the SRK II formula, without selecting an implant for surgery?

`contexto`

- `0` — No
- `1` — Yes

## Method edition

SRK II 1988; historical implementation for teaching

## Documented formula

P = adjusted A − 2.5 L − 0.9 K. A adjustment: +3 if L \< 20; +2 if L \< 21; +1 if L \< 22; 0 if L \< 24.5; −0.5 otherwise. Target refraction: subtract R × 1.25 if P \> 14, or R if P ≤ 14.

## Limits and population

Historical model with limited precision, especially in short and long eyes. Does not integrate modern biometry or optimized constants and does not select a lens for surgery.

## References

- [Echo-Son · PIROP PAB33 manual rev.9 · 2020 · section 10.2](https://3boptic.com/manuales/PIROP_UserManual_PAB33_9_1.pdf)

- [Sanders DR, Retzlaff J, Kraff MC. Comparison of the SRK II formula and other second generation formulas. J Cataract Refract Surg, 1988.](https://doi.org/10.1016/S0886-3350(88)80087-7)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
