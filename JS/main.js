//Chiedere all’utente di inserire una parola
let inputWord = prompt("Inserisci una parola per verificare se è palindroma:");

//Rendere minuscole le lettere della parola e confrontarla con la parola formata invertendo l'ordine delle lettere
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
let inputEvenOrOdd = prompt("Inserisci <Pari> o <Dispari>").toLowerCase();
