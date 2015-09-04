var Quiz = require("./quiz.js");
var read = require('read');
var fs = require('fs');

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
	this.current_user = 0;
};

Proctor.prototype.quizTime = function() {
	this.createQuiz();
	this.getSavedData();
};

Proctor.prototype.createQuiz = function() {
	var question1 = new Question("What is the capital of California?", "Sacramento", 3);
	var question2 = new Question("Who is the maker of the iPad?", "Apple", 5);
	var question3 = new Question("Who is the president of the USA?", "Barack Obama", 2);
	var question4 = new Question("How many fingers are on the human hand?", "5", 3);
	this.quiz = new Quiz([question1, question2, question3, question4]);
	this.quiz.determineBonus();
};

Proctor.prototype.getSavedData = function() {
	var self = this;
	fs.readFile("./user_data.json", 'utf8', function(err, file) {
		if (err) {
        	throw err;
    	} else {
    		self.testers = JSON.parse(file);
    		self.showLeaders();
    		self.checkUser();
		}
	});
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
		self.testers.unshift(new User(name));
		this.current_user = 0;
		self.getAnswer();  		
	});

	
}; 

Proctor.prototype.findUser = function() {
	var self = this;
	var user_names = this.testers.map(function(user) {return user.name;});

	options = {prompt: "Enter Name: "};
	read(options, function(err, name) {
		this.current_user = user_names.indexOf(name);
		if (current_user > -1) {
			self.getAnswer();
		} else {
			self.addNewUser();
		}
	});
};

Proctor.prototype.getAnswer = function() {
	console.log("Your current score is: " + this.testers[current_user].total);
	if (this.checkCurrentUserLeader()) {
		console.log("You are the current leader.")
	}
	this.quiz.showQuestion(this.testers[current_user].location);

	options = {prompt: ""};

	var self = this;
	read(options, function(err, answer) {
		self.checkAnswer(answer);
	});

 };

 Proctor.prototype.checkAnswer = function(answer) {
 	if (answer === "save") {
 		this.saveGame();
 	} else {
 		var score = this.quiz.checkAnswer(answer,this.testers[current_user].location);
 		this.testers[current_user].total += score;
 		if (score > 0) {
 			this.testers[current_user].location += 1;
 		}

 		if (!this.quiz.endOfQuiz(this.testers[current_user].location)) {
			this.getAnswer();	
		} else {
				console.log("\nYour final score is: " + this.testers[current_user].total);
				console.log("End of Quiz!");
		}
 	}
 };
Proctor.prototype.saveGame = function() {
	var jsonString = JSON.stringify(this.testers);
	fs.writeFile("./user_data.json", jsonString, function(err) {
    	if(err) {
        	return console.log(err);
    	}
    	console.log("The quiz statas was saved!");
		});
};

Proctor.prototype.showLeaders = function() {
	this.testers.forEach(function (user) {
		console.log(user.name + ".............." + user.total)
	});
};

Proctor.prototype.checkCurrentUserLeader = function() {
	var current_user_total = this.testers[current_user].total;
	var winners = this.testers.filter(function(user) {
		return current_user_total < user.total;});
	return winners.length == 0;
};

module.exports = Proctor;