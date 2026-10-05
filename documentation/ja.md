<!-- ELUCENIA technical documentation · lente-intraocular-srk-ii · ja · no clinical/professional/rights approval -->

# SRK II：歴史的な学習モデル

[条件・出典・許諾](https://elucenia.org/ja/tools/lente-intraocular-srk-ii)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### レンズのA定数

`a`

範囲: 110–125

### 眼軸長

`al`

mm · 範囲: 15–40

### 平均角膜曲率（K）

`k`

D · 範囲: 30–60

### 目標術後屈折値

`alvo`

D · 任意 · 範囲: -6–3

### SRK II式の歴史的・教育的使用で、手術用インプラントを選択しませんか？

`contexto`

- `0` — いいえ
- `1` — はい

## 方法の版

SRK II 1988；教育目的の歴史的実装

## 記載された計算式

P = 補正A − 2.5 L − 0.9 K。A補正：L \< 20で+3；L \< 21で+2；L \< 22で+1；L \< 24.5で0；その他で−0.5。目標屈折：P \> 14ならR × 1.25を減算、P ≤ 14ならRを減算。

## 限界・対象集団

精度に限界がある歴史的モデルで、特に眼軸の短い眼と長い眼では注意が必要です。現代の生体計測や最適化定数を組み込まず、手術用レンズを選択しません。

## 参考文献

- [Echo-Son · PIROP PAB33マニュアル rev.9 · 2020 · 10.2節](https://3boptic.com/manuales/PIROP_UserManual_PAB33_9_1.pdf)

- [Sanders DR, Retzlaff J, Kraff MC. Comparison of the SRK II formula and other second generation formulas. J Cataract Refract Surg, 1988.](https://doi.org/10.1016/S0886-3350(88)80087-7)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
