//Prompt per chiedere all’utente di inserire una parola
let inputWord = prompt("Inserisci una parola per verificare se è palindroma:");
while ((!isNaN(inputWord)) || (inputWord.length == 0) || (inputWord.includes(" ") === true)) {
    inputWord = prompt("Inserisci una parola per verificare se è palindroma:");
    if ((isNaN(inputWord)) && (inputWord.length !== 0) && (inputWord.includes(" ") === false)) {
        break;
    }
}

//Funzione per rendere minuscole le lettere della parola e confrontarla con la parola formata invertendo l'ordine delle lettere
function isWordPalindrome(word) {
    word = word.toLowerCase()
    return word === word.split("").reverse().join("");
}

//Dichiarazione del risultato
if (isWordPalindrome(inputWord)) { 
    alert("La parola è palindroma") 
    } else { 
    alert("La parola non è palindroma.") 
}



// Funzione per generare un numero casuale tra 1 e 5
function randomNumber (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
const selectedRandomNumber = randomNumber (1, 5);

// Funzione per determinare se un numero è pari o dispari
function sumOfNumbers (num1, num2) {
    return (num1 + num2) % 2 == 0;
}

// Prompt per l'utente per scegliere pari o dispari
let inputEvenOrOdd;

while ((inputEvenOrOdd !== "pari" || inputEvenOrOdd !== "dispari")) {
    inputEvenOrOdd = prompt("Inserisci <Pari> o <Dispari>").toLowerCase();
    if (inputEvenOrOdd == "pari" || inputEvenOrOdd == "dispari") {
        break;
    }
}

// Prompt per l'utente per inserire un numero da 1 a 5
let inputNumber = prompt("Inserisci un numero da 1 a 5");

while ((inputNumber > 5 || inputNumber < 1) || (isNaN(inputNumber))) {
    inputNumber = prompt("Inserisci un numero da 1 a 5");
    if (inputNumber < 6 && inputNumber > 0) {
        break;
    }
}

// Verifica se la somma del numero inserito dall'utente e del numero random corrisponde a un numero pari
const sumEvenOrOdd = (inputNumber + selectedRandomNumber) % 2 == 0;

//Confronto tra scelta dell'utente (pari o dispari) e del numero risultante dalla somma
let winOrLoss;

if (sumEvenOrOdd === true && inputEvenOrOdd == "pari") {
    winOrLoss = alert("Hai vinto!")
} else if (sumEvenOrOdd === false && inputEvenOrOdd == "dispari") {
    winOrLoss = alert("Hai vinto!")
} else {
    winOrLoss = alert("Hai perso!")
}