var Character = require('./character.js');
var read = require('read');

var Board = function(rooms) {
	this.board = rooms;
	this.player = new Character();
	this.exit = false;
};

Board.prototype.show_inventory = function () {
	this.player.show_inventory();
};


Board.prototype.move = function(move) {
	move = move.toUpperCase();
	// switch (move){
	// 	case 'E':
	// 	case 'N':
	// 	case 'W':
	// 	case 'S': 	this.move_room(move);
	// 				break;
	// 	case "CRY": console.log("Don't cry, the bears will come");
	// 				break;
	// 	case "INVENTORY": this.show_inventory();
	// 				break;
	// 	case "EXIT": this.exit = true;
	// 				break;
	// 	default: 	console.log("Mande?");			
	// }

	if (move === 'E' || move === 'W' || move === 'N' || move === 'S') {
		this.move_room(move);
	}	else if (move === "CRY") {
			console.log("Don't cry, the bears will come");
	}	else if (move === "INVENTORY") {
			this.show_inventory();
	}	else if (move === "INVENTORY") {
			this.show_inventory();
	}	else if (move.search("PICK UP") === 0) {
			this.pick_up(move);
	}	else if (move.search("DROP") === 0) {
			this.drop(move);
	}	else if (move === "EXIT") {
		this.exit = true;
	}
	else {
		console.log("Mande?");
	}
	this.play_game();
};

Board.prototype.play_game = function(){
	options = {prompt: "\n>"};
	var self = this;
	if (!this.exit) {
		read(options, function(err, move) {
			self.move(move);
			});
	}

	else {
		console.log("Game Over");
	}
};

Board.prototype.pick_up = function(move) {
	var item = move.replace("PICK UP ", "").trim();
	var check_item = this.board[this.player.location].checkRoomForItem(item);
	if (check_item) {
		this.player.addItem(item);
		this.board[this.player.location].removeItem(item);
		this.show_inventory();
	} else {
		console.log(item + " is not in room.");
	}
};

Board.prototype.drop = function(move){
	var item = move.replace("DROP ", "").trim();
	var has_item = this.player.checkItem(item);
	if (has_item) {
		this.player.dropItem(item);
		this.board[this.player.location].addItem(item);
	} else {
		console.log(item + " is not in your inventory.");
	}
};

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
};
	
module.exports = Board;