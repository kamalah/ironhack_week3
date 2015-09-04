function blast_off(seconds) {
	
	var current = seconds;
	
	print_time();
	
	function print_time() {
		if (current > 0) {
			console.log(current);
			current -= 1;
			setTimeout(print_time,1000);
		} else {
			console.log("Blast Off!");
		}
	}
}

blast_off(5);