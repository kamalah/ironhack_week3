var fs = require('fs');

function print (error, content){
	if (error) {
		console.log('Oh no error', error);
	} else {
		var content_array = content.split('\n');
		content_array.pop();
		for (var i = 0; i < content_array.length; i++) {
			console.log("line "+ (i+1)+": "+content_array[i]);
		};
		// console.log('Success!', content);
	}
}

fs.readFile("slides.txt", 'utf8', print)