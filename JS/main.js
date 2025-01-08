//Prompt to ask the user to enter a word
let inputWord = prompt("Inserisci una parola per verificare se è palindroma:");
while ((!isNaN(inputWord)) || (inputWord.length == 0) || (inputWord.includes(" ") === true)) {
    inputWord = prompt("Inserisci una parola per verificare se è palindroma:");
    if ((isNaN(inputWord)) && (inputWord.length !== 0) && (inputWord.includes(" ") === false)) {
        break;
    }
}

//Function to lowercase the letters of the word and compare it with the word formed by reversing the order of the letters
function isWordPalindrome(word) {
    word = word.toLowerCase()
    return word === word.split("").reverse().join("");
}

//Result declaration
if (isWordPalindrome(inputWord)) { 
    alert("La parola è palindroma") 
    } else { 
    alert("La parola non è palindroma.") 
}



// Function to generate a random number between 1 and 5
function randomNumber (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
const selectedRandomNumber = randomNumber (1, 5);

// Function to determine if a number is even or odd
function sumOfNumbers (num1, num2) {
    return (num1 + num2) % 2 == 0;
}

// Prompt for user to choose even or odd
let inputEvenOrOdd;

while ((inputEvenOrOdd !== "pari" || inputEvenOrOdd !== "dispari")) {
    inputEvenOrOdd = prompt("Inserisci <Pari> o <Dispari>").toLowerCase();
    if (inputEvenOrOdd == "pari" || inputEvenOrOdd == "dispari") {
        break;
    }
}

// Prompt the user to enter a number from 1 to 5
let inputNumber = prompt("Inserisci un numero da 1 a 5");

while ((inputNumber > 5 || inputNumber < 1) || (isNaN(inputNumber))) {
    inputNumber = prompt("Inserisci un numero da 1 a 5");
    if (inputNumber < 6 && inputNumber > 0) {
        break;
    }
}

// Check if the sum of the number entered by the user and the random number is an even number
const sumEvenOrOdd = (inputNumber + selectedRandomNumber) % 2 == 0;

//Comparison between the user's choice (even or odd) and the number resulting from the sum
let winOrLoss;

if (sumEvenOrOdd === true && inputEvenOrOdd == "pari") {
    winOrLoss = alert("Hai vinto!")
} else if (sumEvenOrOdd === false && inputEvenOrOdd == "dispari") {
    winOrLoss = alert("Hai vinto!")
} else {
    winOrLoss = alert("Hai perso!")
}