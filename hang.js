// Load NPM Packages
var inquirer = require("inquirer");
var fs = require("fs"); 
var Word = require("./word.js");

var wordArray = ["cellulite", "pampers", "starbucks", "chinatown", "duracell", "bitcoin", "beiber", "swiffer", "tallahasee"];
var array = [];

function playHangman(){
	inquirer.prompt([
		{
			type: "list",
			message: "Would you like to play hangman?\n",
			choices:["Yes", "No"],
			name: "play"
		}
		]).then(function(inquirerResponse) {
			console.log("user said: " + inquirerResponse.play);
			userSaid = inquirerResponse.play;
			if(userSaid == "Yes"){
				round(2);
			}else if(userSaid == "No"){
				process.exit();
			}
		})
}

function round(tries){
	var guessWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	console.log("Word to guess:", guessWord);
	var userGuess = "";

	var newWord = new Word(guessWord);
	if(tries == 0){
		console.log("GameOver!");
		playHangman();
		return;
	}

	newWord.convertToArray();

	for(var i = 0; i < newWord.displayArray.length; i++) {
		var stringDisplay = "";
		if(newWord.displayArray[i].letter == " "){
			array.push(" ");
		}else{
			array.push(newWord.displayArray[i].display);
		}
	}

	console.log("array", array);

	stringDisplay = array.toString().replace(/,/g,"");
	console.log(stringDisplay);

	inquirer.prompt([
		{
			type: "input",
			message: "Guess a letter!\n",
			name: "guess"
		}
		]).then(function(inquirerResponse) {
			var newLetter = new Letter(letter);
			console.log("user guess is: " + inquirerResponse.guess);
			userGuess = inquirerResponse.guess;
			newLetter.checkLetter(userGuess);
			round(tries);
		})

}

playHangman();