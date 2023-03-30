Campo Minato Dom
===

## Descrizione

## Parte 1

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## Parte 2

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


**Bonus**

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## Steps

**Parte 1**

- Creo il markup
- In js seleziono il container
- Faccio un ciclo per generare 1 square ad ogni ciclo fino a      100 sqaure
- Aggiungo funzione per genere gli square
- Assegno loro una classe
- Nella stessa funzione utilizzo il metodo indexOf per visualizzare in console il numero della casella selezionata

**Parte 2**

TODO List :

- PLAY(Inizia a giocare):

  1) Il tasto play sarà lo stesso tasto del reset

  2) Play dovrà generare la griglia e le bombe in base al livello selezionato

- CLICK:

  verifica se è una bomba:
  1) se SI --> coloro la casella di rosso --> FINE GIOCO
  2) se NO --> coloro la casella di rosa --> incremento il punteggio di 1 --> verifico se il punteggio è al massimo--> se SI --> FINE GIOCO.

- FINE GIOCO:

  1) Coloro le tutte le bombe
  2) Compare messaggio (hai vinto/hai perso) con punteggio
  3) Blocco la griglia fino al click del tasto 'Play' che resetta.

- RESET:

  1) Canella le bombe
  2) Svuola la griglia
  3) Azzerriamo il punteggio
  4) Cancello messaggio (hai vinto/hai perso).


