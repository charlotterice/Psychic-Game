var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var computerChoice = letterArray[Math.floor(Math.random() * letterArray.length)];
var wins=0;
var losses=0;
var lives=10;
var userInput=[];
//letterArray = document.getElementById("letterArray");
//computerChoice = document.getElementById("computerChoice");
//win = document.getElementById("wins");

function startup(){
    wins=0
    losses=0
    userInput=[];
}

document.onkeydown = function(event) {
    var userGuess = event.key;
   if (letterArray.indexOf(userGuess) > -1) {

       if (userGuess === computerChoice) {
           wins++;
           lives = 10;
           userInput = [];
       }

       if (userGuess != computerChoice) {
           lives --;
           userInput.push(userGuess);
       }

       if (lives === 0) 
       {
       lives = 10;
       losses ++;
       userInput = [];
       } 
   document.querySelector("#container").innerHTML;
}
}
