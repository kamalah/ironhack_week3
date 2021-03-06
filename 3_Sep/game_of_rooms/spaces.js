var Space = function(description,exits, room_items) {
	this.description = description;
	this.directions = {"E":exits[0],"W":exits[1],"N":exits[2],"S":exits[3]};
	this.room_items = room_items || [];
};

Space.prototype.get_exits = function() {
	var exit_string = "";
	if (this.directions["E"] ==1) {
		exit_string += "E ";
	}
	if (this.directions["W"] ==1) { 
		exit_string += "W ";
	}
	if (this.directions["N"] ==1) {
		exit_string += "N ";
	}
	if (this.directions["S"] ==1) { 
		exit_string += "S ";
	}

	return exit_string;
};

Space.prototype.checkRoomForItem = function (item) {
	return (this.room_items.indexOf(item) > -1);
};
		
Space.prototype.show_room = function() {
	console.log(this.description);
	console.log("Exits: " + this.get_exits());
		if (this.room_items.length > 0) {
			console.log("There is/are: " + this.room_items.join(", "));
		} 
};

Space.prototype.removeItem = function(item) {
	var item_index = this.room_items.indexOf(item);
	this.room_items.splice(item_index,1);
};

Space.prototype.addItem = function(item) {
	this.room_items.push(item);
};

module.exports = Space;