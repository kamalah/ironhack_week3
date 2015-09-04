var decode = require("./word_decoder.js");
function super_decode (sentence, rules) {
	var rule_array = rules.split("-");
	var sentence_array = sentence.split(" ");
	
	var short_array = [];
	var index = 0;
	if (rule_array[0] === "odd") {
		index = 1;
	} 

	if (rule_array[0] === "every"){
		short_array = sentence_array;

	} else {
		for (index; index < sentence_array.length; index+=2) {
			short_array.push(sentence_array[index]);
		}
	}

	if (rule_array[1] === "backwards") {
		short_array = short_array.reverse();
	}

	return decode(short_array);
}

function check_decode (sentence){
	var rule1 = ["every", "even", "odd"];
	var rule2 = ["backwards", "forwards"];

	for (var i = 0; i < rule1.length; i++) {
		rule2.forEach( function (rule) { 
			console.log(super_decode(sentence, rule1[i] + "-"  + rule));})
	}

}

// var sentence, message;

// sentence = "fill the proper tank for the cow";
// message = super_decode(sentence, "even-backwards");
// console.log(message);

var sentence1 = "Attack her nose under here with an itch";
var sentence2 = "Raul Nuñez call never finished";
var sentence3 = "Start rapping this or countless queasy wizards give back jay-z";
var sentence4 = "inner peace is overrated";
var sentence5 = "Fill the proper tank for the cow"

//check_decode(sentence1);
//check_decode(sentence2);
//check_decode(sentence3);
check_decode(sentence4);
//check_decode(sentence5);