// console.log("Hello")
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses = [];
// var eachofLetters = null;

function showUserChoice(key) {
    userGuesses.push(key)
    document.querySelector("#soFar").innerHTML = "Your guesses so far: " + userGuesses;
    console.log(key)
    console.log(guessesLeft)
    console.log(event.key)   
}

// When the user presses a key, it will run the following function..
document.onkeyup = function(event) {
    guessesLeft--;
    showUserChoice(event.key)

}
    


