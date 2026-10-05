<!-- ELUCENIA technical documentation · lente-intraocular-srk-ii · fr · no clinical/professional/rights approval -->

# SRK II : modèle historique pédagogique

[conditions, sources et autorisations](https://elucenia.org/fr/outils/lente-intraocular-srk-ii)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Constante A de l’implant

`a`

intervalle: 110–125

### Longueur axiale

`al`

mm · intervalle: 15–40

### Kératométrie moyenne (K)

`k`

D · intervalle: 30–60

### Réfraction postopératoire souhaitée

`alvo`

D · facultatif · intervalle: -6–3

### Utilisation historique/pédagogique de la formule SRK II, sans choix d’implant pour une chirurgie ?

`contexto`

- `0` — Non
- `1` — Oui

## Édition de la méthode

SRK II 1988 ; implémentation historique à visée pédagogique

## Formule documentée

P = A ajusté − 2,5 L − 0,9 K. Ajustement A : +3 si L \< 20 ; +2 si L \< 21 ; +1 si L \< 22 ; 0 si L \< 24,5 ; −0,5 sinon. Réfraction cible : soustraire R × 1,25 si P \> 14, ou R si P ≤ 14.

## Limites et population

Modèle historique de précision limitée, notamment pour les yeux courts et longs. N’intègre pas de biométrie ou de constantes optimisées modernes et ne choisit pas de lentille pour une chirurgie.

## Références

- [Echo-Son · manuel PIROP PAB33 rév.9 · 2020 · section 10.2](https://3boptic.com/manuales/PIROP_UserManual_PAB33_9_1.pdf)

- [Sanders DR, Retzlaff J, Kraff MC. Comparison of the SRK II formula and other second generation formulas. J Cataract Refract Surg, 1988.](https://doi.org/10.1016/S0886-3350(88)80087-7)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
