var read = require('read');

var Board = require('./board.js');
var Space = require('./spaces.js');

room_1 = new Space("You are in a sunny room, there are two exits.", [0,1,0,1], ["SWORD"]);
room_2 = new Space("You are at the beach there are exits all around.",[1,1,0,1]);
room_3 = new Space("This is a dark room with two exits.",[1,0,0,1]);
room_4 = new Space("This is a classroom.",[0,1,1,0]);
room_5 = new Space("This is a tiny apartment in New York",[1,1,1,0]);
room_6 = new Space("You cannot escape from this room.... maybe.",[1,0,1,0],["LAPTOP"]);

my_board = new Board([room_1, room_2, room_3, room_4, room_5, room_6]);


options = {prompt: "Enter your move?\n>"};
read(options, function(err, move) {
	my_board.move(move);
});

// options = {prompt: "Enter your move?\n>"};
// read(options, my_board.move)

