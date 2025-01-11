

//Function to lowercase the letters of the word and compare it with the word formed by reversing the order of the letters
function isWordPalindrome(word) {
    word = word.toLowerCase()
    return word === word.split("").reverse().join("");
}
//End

const submitButtonPalindrome = document.querySelector("#submitButtonPalindrome");
let resultPalindromeSpace = document.querySelector("#resultPalindromeSpace");

//Palindrome input behavior
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
//End


    


//Function to generate a random number between 1 and 5
function randomNumber (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
//End

//Function to determine if sum is even or odd
function sumOfNumbers (num1, num2) {
    return (num1 + num2) % 2 == 0;
}
//End

//Function to add new result to history
function addResultToTop(resultText) { 
    const historySpace = document.querySelector("#historySpace");
    const newResult = document.createElement("li");
    newResult.innerHTML = resultText;
    historySpace.insertBefore(newResult, historySpace.firstChild); 
}
//End



const submitButtonEvenOrOdd = document.querySelector("#submitButtonEvenOrOdd");
const resultWinOrLossSpace = document.querySelector("#resultWinOrLossSpace");

//Even or odd input behavior
submitButtonEvenOrOdd.addEventListener("click", function(event) {

    event.preventDefault ();

    const selectedRandomNumber = randomNumber (1, 5);
    const inputEvenOrOdd = document.querySelector("#inputEvenOrOdd").value.toLowerCase().trim();
    const inputNumber = document.querySelector("#inputNumber").value.trim();

    //Acceptance conditions
    if (inputEvenOrOdd !== "pari" && inputEvenOrOdd !== "dispari") {
        
            alert("Inserisci <Pari> o <Dispari>");

        } else if ((inputNumber < 1 || inputNumber > 5) || (isNaN(inputNumber))) {

            alert("Inserisci un numero valido");

        } else {

            //Result declaration
            const sumEvenOrOdd = sumOfNumbers(selectedRandomNumber, inputNumber);

            if (sumEvenOrOdd === true && inputEvenOrOdd == "pari") {

                    resultWinOrLossSpace.innerHTML = `HAI VINTO! &#127882;`;

                } else if (sumEvenOrOdd === false && inputEvenOrOdd == "dispari") {

                    resultWinOrLossSpace.innerHTML = `HAI VINTO! &#127882;`;

                } else {

                    resultWinOrLossSpace.innerHTML = `HAI PERSO! &#128557;`;
            }

            return addResultToTop(resultWinOrLossSpace.innerHTML)
            //End
    }
})
//End

//Clear history input behavior
const buttonClearHistory = document.querySelector("#buttonClearHistory");

buttonClearHistory.addEventListener("click", function(clear) {

    clear.preventDefault()
    const history = document.querySelectorAll("li");
    for (let i = 0; i < history.length; i++) {
        history[i].remove();
    }
})
//End