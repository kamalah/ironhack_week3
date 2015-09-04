var read = require('read');

var Character  = function() {
	this.location = 0;
	this.inventory = [];
};


var Board = function(rooms) {
	this.board = rooms;
	this.player = new Character();
	this.exit = false;
}

Board.prototype.move = function(move) {
	move = move.toUpperCase();
	console.log(move);
	if (move === 'E' || move === 'W' || move === 'N' || move === 'S'){
		this.move_room(move);
	}	else if (move === "CRY") {
			console.log("Don't cry, the bears will come");
	}	else if (move === "EXIT") {
		this.exit = true;
	}
	else {
		console.log("Mande?");
	}
	this.play_game();
};

Board.prototype.play_game = function(){
	options = {prompt: "Enter your move?\n>"};
	if (!this.exit) {
		read(options, function(err, move) {
			my_board.move(move);
			});
	}

	else {
		console.log("Game Over");
	}


}
Board.prototype.move_room = function(move) {

	if (this.board[this.player.location].directions[move] === 1) {
			switch (move) {
				case 'E':
					this.player.location -=1; break;
				case 'W':
					this.player.location +=1; break;
				case 'S':
					this.player.location +=3; break;
				case 'N':
					this.player.location -=3; break;
			}
			this.board[this.player.location].show_room();			
		}
		else{
			console.log("Invalid move");
		}
}
	
module.exports = [Character, Board];	
