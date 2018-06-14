var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guesses = 0;

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guesses = 9;
var guessArr = [];


document.onkeyup = function (event) {

var userGuess = (event.key).toLowerCase();

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

guessArr.push(userGuess);

console.log (wins);
console.log (losses);
console.log (guesses);
console.log (guessArr);

    if (userGuess === computerGuess){
        wins++;
        (guesses = 9);
    }

    else if (userGuess !== computerGuess){
        guesses--;
    }

    if (guesses == 0) {
        losses++;
        (guesses = 9);
        alert ("Sorry, you're not psychic! Try again.");
        
    }

    if (losses == 9) {
        alert ("You're definitely not psychic. Refresh the page to try again.")
        return;
    }
    var html =
    "<p> You chose: " + event.key + "</p>"+
    "<p> The computer chose: " + computerGuess + "</p>" +
    "<p> Wins: " + wins + "</p>" + 
    "<p> Losses: " + losses + "</p>" +
    "<p> Guesses: " + guesses + "</p>" +
    "<p> Letters guessed so far: " + guessArr + "</p>"

    document.querySelector("#game").innerHTML = html;
    
    };

   



