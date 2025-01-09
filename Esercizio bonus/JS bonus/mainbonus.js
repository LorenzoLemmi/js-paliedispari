

//Function to lowercase the letters of the word and compare it with the word formed by reversing the order of the letters
function isWordPalindrome(word) {
    word = word.toLowerCase()
    return word === word.split("").reverse().join("");
}
//End

const submitButtonPalindrome = document.querySelector("#submitButtonPalindrome");

submitButtonPalindrome.addEventListener("click", function(event) {

    event.preventDefault ();
    const inputWord = document.querySelector("#inputWord").value.trim();