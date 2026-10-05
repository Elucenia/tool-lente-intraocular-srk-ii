<!-- ELUCENIA technical documentation · lente-intraocular-srk-ii · zh · no clinical/professional/rights approval -->

# SRK II：历史教学模型

[条件、来源与许可](https://elucenia.org/zh/tools/lente-intraocular-srk-ii)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 晶状体 A 常数

`a`

范围: 110–125

### 眼轴长度

`al`

mm · 范围: 15–40

### 平均角膜曲率（K）

`k`

D · 范围: 30–60

### 期望术后屈光度

`alvo`

D · 选填 · 范围: -6–3

### 历史/教学用途的 SRK II 公式，非用于选择手术植入物？

`contexto`

- `0` — 否
- `1` — 是

## 方法版本

SRK II 1988；教学用途的历史性实现

## 已记录的公式

P = 调整后A − 2.5 L − 0.9 K。A调整：L \< 20时+3；L \< 21时+2；L \< 22时+1；L \< 24.5时0；其他情况−0.5。目标屈光：P \> 14时减去R × 1.25；P ≤ 14时减去R。

## 限制与适用人群

历史模型，精度有限，尤其适用于短眼轴和长眼轴眼时。不整合现代生物测量或优化常数，不为手术选择人工晶状体。

## 参考文献

- [Echo-Son · PIROP PAB33手册 rev.9 · 2020 · 第10.2节](https://3boptic.com/manuales/PIROP_UserManual_PAB33_9_1.pdf)

- [Sanders DR, Retzlaff J, Kraff MC. Comparison of the SRK II formula and other second generation formulas. J Cataract Refract Surg, 1988.](https://doi.org/10.1016/S0886-3350(88)80087-7)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
