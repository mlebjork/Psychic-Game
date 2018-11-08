var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses = [];


// Sets the computerGuess variable equal to a random choice from the computerChoice array.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuessesLeft() {
	document.querySelector("#left").innerHTML = "Guesses left: " + guessesLeft;
}

function showUserChoice(key) {
    userGuesses.push(key)
    document.querySelector("#soFar").innerHTML = "Your guesses so far: " + userGuesses;
      
}
function reset()  {
    guessesLeft = 9
    userGuesses = []
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
}  

countGuessesLeft()

// When the user presses a key, it will run the following function..
document.onkeyup = function(event) {
    guessesLeft--;
    showUserChoice(event.key)
    countGuessesLeft()
    console.log(computerGuess)
    console.log(event.key);
    
    if (event.key === computerGuess){
        reset();
        alert ("You won!")
		wins++;
		document.querySelector("#Wins").innerHTML = "Wins: " + wins;
		
	} 
	else if (guessesLeft === 0) {
        reset();
        alert("You lost!")
        losses++;
		document.querySelector("#Losses").innerHTML = "Losses: " + losses;
		
	}

}
    


