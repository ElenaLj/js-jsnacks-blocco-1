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

