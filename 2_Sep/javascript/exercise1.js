function eat(food) {
	if (food === "Pizza") {
		console.log("Yay Pizza");
	} else if (food === "Cookies") {
		console.log("Cookies are good too");
	} else {
		console.log("Ok, enjoy eating " + food);
	}
}

eat(process.argv[2]);



	

