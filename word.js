var Word = function(word) {
    this.word = word;
    this.letterArray = [];
    this.displayArray = [];
    this.displayStr = "";
    this.convertToArray = function(word) {
        this.letterArray = this.word.split(/(?!$)/);
        for (var i = 0; i < this.letterArray.length; i++) {
            this.displayArray[i] = new Letter(this.letterArray[i]);
        }
        this.getLetter = function(i) {
            return this.letterArray[i];
        }
    };
};

var Letter = function(letter) {
    this.display = "_ ";
    this.letter = letter;
    this.checkLetter = function(guess) {
        console.log("in checkLetter");
        if (guess == this.letter) {
            this.display = letter + " ";
        }
    }
}

module.exports = {
    Word: Word,
}