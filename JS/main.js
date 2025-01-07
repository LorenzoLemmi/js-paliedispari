//Chiedere all’utente di inserire una parola
//let input = prompt("Inserisci una parola per verificare se è palindroma:");

//Rendere minuscole le lettere della parola e confrontarla con la parola formata invertendo l'ordine delle lettere
function isWordPalindrome(word) {
    word = word.toLowerCase()
    return word === word.split("").reverse().join("");
}

//Dichiarazione del risultato
if (isWordPalindrome(input)) { 
    alert("La parola è palindroma") 
    } else { 
    alert("La parola non è palindroma.") 
}