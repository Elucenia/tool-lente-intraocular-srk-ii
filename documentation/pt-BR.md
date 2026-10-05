<!-- ELUCENIA technical documentation · lente-intraocular-srk-ii · pt-BR · no clinical/professional/rights approval -->

# SRK II: modelo histórico didático

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/lente-intraocular-srk-ii)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Constante A da lente

`a`

intervalo: 110–125

### Comprimento axial

`al`

mm · intervalo: 15–40

### Ceratometria média (K)

`k`

D · intervalo: 30–60

### Refração pós-operatória desejada

`alvo`

D · opcional · intervalo: -6–3

### Uso histórico/didático da fórmula SRK II, sem selecionar um implante para cirurgia?

`contexto`

- `0` — Não
- `1` — Sim

## Edição do método

SRK II 1988; implementação histórica didática

## Fórmula documentada

P = A ajustado − 2,5 L − 0,9 K. Ajuste A: +3 se L \< 20; +2 se L \< 21; +1 se L \< 22; 0 se L \< 24,5; −0,5 nos demais. Refração-alvo: subtrair R × 1,25 se P \> 14, ou R se P ≤ 14.

## Limites e população

Modelo histórico com precisão limitada, especialmente em olhos curtos e longos. Não integra biometria ou constantes otimizadas modernas e não seleciona uma lente para cirurgia.

## Referências

- [Echo-Son · manual PIROP PAB33 rev.9 · 2020 · seção 10.2](https://3boptic.com/manuales/PIROP_UserManual_PAB33_9_1.pdf)

- [Sanders DR, Retzlaff J, Kraff MC. Comparison of the SRK II formula and other second generation formulas. J Cataract Refract Surg, 1988.](https://doi.org/10.1016/S0886-3350(88)80087-7)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
