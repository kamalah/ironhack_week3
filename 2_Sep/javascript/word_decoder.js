
function decode (words) {
	var index = 0;
	var secretMessage = "";

	while (index < words.length) {
		secretMessage += words[index].charAt(index % 5);
		index ++;
	}

	// for (var i = 0; i < words.length; i++) {
	// 	secretMessage += words[i][i % 5];
	// }
	return secretMessage;
}

module.exports = decode;


// var words, message, words1;

// words = ["dead",	"bygone", "landing", 
// 		"cheaply", "assumed", "incorrectly",
// 		"attention", "agent"];

// words1 = ["January", "lacks", "caveats", 
// 			"hazardous","DOORS", "crying", 
// 			"arrogantly","climate", "proponent",
// 			"rebuttal"];

// message = decode(words1);
// console.log(message)