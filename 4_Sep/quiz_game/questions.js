var read = require('read');

var Question = function(question, answer, value) {
	this.question = question;
	this.answer = answer;
	this.value = value;
}

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

Quiz.prototype.startQuiz = function () {
	this.determineBonus();
	this.getAnswer();
}

// var User = function(name){
// 	this.name = name;
// 	this.points = 0;
// 	this.
// };

var question1 = new Question("What is the capital of California?", "Sacramento", 3);
var question2 = new Question("Who is the maker of the iPad?", "Apple", 5);
var question3 = new Question("Who is the president of the USA?", "Barack Obama", 2);
var question4 = new Question("How many fingers are on the human hand?", "5", 3);

var my_quiz = new Quiz([question1, question2, question3, question4]);

my_quiz.startQuiz();