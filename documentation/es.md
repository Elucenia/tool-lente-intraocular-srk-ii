<!-- ELUCENIA technical documentation · lente-intraocular-srk-ii · es · no clinical/professional/rights approval -->

# SRK II: modelo histórico didáctico

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/lente-intraocular-srk-ii)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Constante A de la lente

`a`

intervalo: 110–125

### Longitud axial

`al`

mm · intervalo: 15–40

### Queratometría media (K)

`k`

D · intervalo: 30–60

### Refracción posoperatoria deseada

`alvo`

D · opcional · intervalo: -6–3

### ¿Uso histórico/didáctico de la fórmula SRK II, sin seleccionar un implante para cirugía?

`contexto`

- `0` — No
- `1` — Sí

## Edición del método

SRK II 1988; implementación histórica didáctica

## Fórmula documentada

P = A ajustada − 2,5 L − 0,9 K. Ajuste de A: +3 si L \< 20; +2 si L \< 21; +1 si L \< 22; 0 si L \< 24,5; −0,5 en los demás. Refracción objetivo: restar R × 1,25 si P \> 14, o R si P ≤ 14.

## Límites y población

Modelo histórico de precisión limitada, especialmente en ojos cortos y largos. No integra biometría ni constantes optimizadas modernas y no selecciona una lente para cirugía.

## Referencias

- [Echo-Son · manual PIROP PAB33 rev.9 · 2020 · sección 10.2](https://3boptic.com/manuales/PIROP_UserManual_PAB33_9_1.pdf)

- [Sanders DR, Retzlaff J, Kraff MC. Comparison of the SRK II formula and other second generation formulas. J Cataract Refract Surg, 1988.](https://doi.org/10.1016/S0886-3350(88)80087-7)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
