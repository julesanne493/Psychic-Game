var wins = 0;
var losses = 0;
var guesses = 0;

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guesses = 9;
var guessArr = [];


document.onkeyup = function (event) {

var userGuess = String.fromCharCode(event.keyCode).toLowerCase( );

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

guessArr.push(userGuess);

    if (userGuess === computerGuess){
        wins++;
        (guesses = 9);
        alert ("Congratulations! You are psychic. Feel free to keep playing!");
        (guessArr = []);
    }

    else if (userGuess !== computerGuess){
        guesses--;
    }

    if (guesses == 0) {
        losses++;
        (guesses = 9);
        alert ("Sorry, you're not psychic! Try again.");
        (guessArr = []);
        
    }

    var html =
    event.key
    
    document.querySelector("#chose").innerHTML = html;

    var html =
    computerGuess

    document.querySelector("#compchoice").innerHTML = html;

    var html =
    wins

    document.querySelector("#wins").innerHTML = html;

    var html =
    losses

    document.querySelector("#losses").innerHTML = html;

    var html =
    guesses

    document.querySelector("#guesses").innerHTML = html;

    var html =
    guessArr

    document.querySelector("#guessArr").innerHTML = html;
    
    };

   



