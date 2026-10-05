<!-- ELUCENIA technical documentation · lente-intraocular-srk-ii · it · no clinical/professional/rights approval -->

# SRK II: modello storico didattico

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/lente-intraocular-srk-ii)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Costante A della lente

`a`

intervallo: 110–125

### Lunghezza assiale

`al`

mm · intervallo: 15–40

### Cheratometria media (K)

`k`

D · intervallo: 30–60

### Refrazione postoperatoria desiderata

`alvo`

D · facoltativo · intervallo: -6–3

### Uso storico/didattico della formula SRK II, senza selezionare un impianto per un intervento?

`contexto`

- `0` — No
- `1` — Sì

## Edizione del metodo

SRK II 1988; implementazione storica didattica

## Formula documentata

P = A aggiustata − 2,5 L − 0,9 K. Aggiustamento A: +3 se L \< 20; +2 se L \< 21; +1 se L \< 22; 0 se L \< 24,5; −0,5 negli altri. Refrazione target: sottrarre R × 1,25 se P \> 14, oppure R se P ≤ 14.

## Limiti e popolazione

Modello storico con precisione limitata, soprattutto negli occhi corti e lunghi. Non integra biometria o costanti ottimizzate moderne e non seleziona una lente per la chirurgia.

## Riferimenti

- [Echo-Son · manuale PIROP PAB33 rev.9 · 2020 · sezione 10.2](https://3boptic.com/manuales/PIROP_UserManual_PAB33_9_1.pdf)

- [Sanders DR, Retzlaff J, Kraff MC. Comparison of the SRK II formula and other second generation formulas. J Cataract Refract Surg, 1988.](https://doi.org/10.1016/S0886-3350(88)80087-7)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
