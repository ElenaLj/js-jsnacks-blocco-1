// alert("Hello World!");

// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// soluzione ciclo for

let sommaFor = 0; 

for (let i = 0; i < 5; i++) {
    const insertNumber = parseInt(prompt("Inserisci un numero per il ciclo for"));
    // console.log(insertNumber);
    sommaFor += insertNumber;
};

console.log("La somma dei numeri inseriti con il ciclo for è: " + sommaFor);

document.getElementById("sommafor").innerHTML = "La somma dei numeri inseriti con il ciclo for è: " + sommaFor;

// soluzione ciclo while

let sommaWhile = 0;

let i = 0;

while (i < 5) {
    const insertNumber = parseInt(prompt("Inserisci un numero per il ciclo while"));
    // console.log(insertNumber);
    sommaWhile += insertNumber;
    // MI SERVE PER USCIRE FUORI DAL LOOP
    i++;
};

console.log("La somma dei numeri inseriti con il ciclo while è: " + sommaWhile);

document.getElementById("sommawhile").innerHTML = "La somma dei numeri inseriti con il ciclo while è: " + sommaWhile;

// JSnack 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const insertWord = prompt("Inserisci una parola");
const insertAnother = prompt("Inserisci un'altra parola");

// console.log(insertWord);
// console.log(insertAnother);

if (insertWord.length === insertAnother.length) {
    console.log(insertWord + " e " + insertAnother + " " + "hanno lo stesso numero di caratteri");

    // output HTML
    document.querySelector(".same").innerHTML = insertWord + " e " + insertAnother + " " + "hanno lo stesso numero di caratteri";

} else if (insertWord.length > insertAnother.length) {
    console.log(insertWord + " ha un numero di caratteri maggiore rispetto a " + insertAnother);

    // output HTML
    document.querySelector(".word-one").innerHTML = insertWord + " ha un numero di caratteri maggiore rispetto a " + insertAnother;

} else {
    console.log(insertAnother + " ha un numero di caratteri maggiore rispetto a " + insertWord);

    //output HTML
    document.querySelector(".word-two").innerHTML = insertAnother + " ha un numero di caratteri maggiore rispetto a " + insertWord;
};

//JSnack 3
//Stampa le potenze di 2 fino a 1000

// ****************** ragionamento basic

// let quadrato = 2;
// console.log(quadrato);

// quadrato = quadrato * 2;
// console.log(quadrato);

// quadrato = quadrato * 2;
// console.log(quadrato);

// ... continua 

// ****************** soluzione con ciclo DO WHILE
let square = 2;
// console.log(square);
let maxSquare = 512;

let squareNumbers = [2];

do {
    square = square * 2;
    // console.log(square);

    squareNumbers.push(square);
    console.log(squareNumbers);

} while (square < maxSquare);

document.getElementById("square").innerHTML = "Le potenze di 2 minori di 1000 sono:" + `<ul><li>${squareNumbers}</li></ul>`;