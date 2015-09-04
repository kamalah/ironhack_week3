var Quiz = require("./quiz.js");
var read = require('read');

var User = function(name){
	this.name = name;
	this.location = 0;
	this.total = 0;
};

var Question = function(question, answer, value) {
	this.question = question;
	this.answer = answer;
	this.value = value;
}

var Proctor = function() {
	this.quiz = [];
	this.testers = [];
};

Proctor.prototype.createQuiz = function() {
	var question1 = new Question("What is the capital of California?", "Sacramento", 3);
	var question2 = new Question("Who is the maker of the iPad?", "Apple", 5);
	var question3 = new Question("Who is the president of the USA?", "Barack Obama", 2);
	var question4 = new Question("How many fingers are on the human hand?", "5", 3);
	this.quiz = new Quiz([question1, question2, question3, question4]);
};

Proctor.prototype.quizTime = function() {
	this.createQuiz();
	this.testers.push(new User("Feo Grande"));
	this.testers[0].location = 2;
	this.checkUser();
};

Proctor.prototype.checkUser = function() {
	var self = this;
	options = {prompt: "New User?"};
	read(options, function(err, answer) {
		if (answer === "yes") {
			self.addNewUser();
		} else {
			self.findUser();
		}
	});
};

Proctor.prototype.addNewUser = function() {
	var self = this;
	options = {prompt: "Enter Name: "};
	
	read(options, function(err, name) {
		self.testers.push(new User(name));
		self.startQuiz(self.testers.length-1);  		
	});

	
}; 

Proctor.prototype.findUser = function() {
	var self = this;
	var user_names = this.testers.map(function(user) {return user.name;});

	options = {prompt: "Enter Name: "};
	read(options, function(err, name) {
		var current_user = user_names.indexOf(name);
		if (current_user > -1) {
			self.startQuiz(current_user);
		} else {
			self.addNewUser();
		}
	});
};

Proctor.prototype.startQuiz = function(user) {
	this.quiz.startQuiz(this.testers[user]);
};

module.exports = Proctor;