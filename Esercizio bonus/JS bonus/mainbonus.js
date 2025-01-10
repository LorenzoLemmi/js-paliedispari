

//Function to lowercase the letters of the word and compare it with the word formed by reversing the order of the letters
function isWordPalindrome(word) {
    word = word.toLowerCase()
    return word === word.split("").reverse().join("");
}
//End

const submitButtonPalindrome = document.querySelector("#submitButtonPalindrome");
let resultPalindromeSpace = document.querySelector("#resultPalindromeSpace");

submitButtonPalindrome.addEventListener("click", function(event) {

    event.preventDefault ();
    const inputWord = document.querySelector("#inputWord").value.trim();

    //Acceptance conditions
    if ((!isNaN(inputWord)) || (inputWord.length == 0) || (inputWord.includes(" ") === true)) {

            alert("Inserisci una parola valida!");

        } else if ((isNaN(inputWord)) && (inputWord.length !== 0) && (inputWord.includes(" ") === false)) {

            //Result declaration
            const resultPalindrome = isWordPalindrome(inputWord);
            if (resultPalindrome === true) { 
                resultPalindromeSpace.innerHTML = `PALINDROMA &#x1F389;`;
                } else { 
                resultPalindromeSpace.innerHTML = `NON PALINDROMA &#x1F645;`;
            }
            //End
 
    }
    //End
})

    


// Function to generate a random number between 1 and 5
function randomNumber (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
const selectedRandomNumber = randomNumber (1, 5);
//End

// Function to determine if a number is even or odd
function sumOfNumbers (num1, num2) {
    return (num1 + num2) % 2 == 0;
}
//End


const submitButtonEvenOrOdd = document.querySelector("#submitButtonEvenOrOdd");