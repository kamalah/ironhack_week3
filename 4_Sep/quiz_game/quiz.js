var read = require('read');

var Quiz = function(questions) {
	this.quiz_array = questions;
	this.location = 0;
	this.total = 0;
	this.bonus = -1;
};

Quiz.prototype.checkAnswer = function(answer, index) {
	if (this.quiz_array[index].answer === answer) {
		console.log("Correct!");
		return this.quiz_array[index].value;
	} else {
		console.log("Incorrect!");
		return  (-1 * this.quiz_array[index].value);
	}
};

Quiz.prototype.showQuestion = function(index) {
		if (index == this.bonus) {
		console.log("***** Bonus Question worth: " + this.quiz_array[index].value +
			" points ******");
		}

		console.log(this.quiz_array[index].question);
};

Quiz.prototype.determineBonus = function() {
	this.bonus = Math.floor(Math.random()* this.quiz_array.length);
	this.quiz_array[this.bonus].value  *= 2;
};

Quiz.prototype.endOfQuiz = function(index) {
	return (index === this.quiz_array.length);
}

module.exports = Quiz;