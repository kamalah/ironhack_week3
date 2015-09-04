var read = require('read');

var Quiz = function(questions) {
	this.quiz_array = questions;
	this.location = 0;
	this.total = 0;
	this.bonus = -1;
};

Quiz.prototype.checkAnswer = function(answer) {
	if (this.quiz_array[this.location].answer === answer) {
		console.log("Correct!");
		this.total += this.quiz_array[this.location].value;
		this.location ++;
	} else {
		console.log("Incorrect!");
		this.total -= this.quiz_array[this.location].value;
	}

	if (this.location < this.quiz_array.length) {
		this.getAnswer();	
	} else {
		
		console.log("\nYour final score is: " + this.total);
		console.log("End of Quiz!");
	}
	
};

Quiz.prototype.getAnswer = function() {
	console.log("Your current score is: " + this.total);
	if (this.location == this.bonus) {
		console.log("***** Bonus Question worth: " + this.quiz_array[this.location].value +
			" points ******");
	}
	options = {prompt: this.quiz_array[this.location].question};
	
	var self = this;
	read(options, function(err, answer) {
		self.checkAnswer(answer);
	});

 };

Quiz.prototype.determineBonus = function() {
	this.bonus = Math.floor(Math.random()* this.quiz_array.length);
	this.quiz_array[this.bonus].value  *= 2;
};

Quiz.prototype.startQuiz = function (user) {
	this.location = user.location;
	this.total = user.total;
	this.determineBonus();
	this.getAnswer();
}

module.exports = Quiz;