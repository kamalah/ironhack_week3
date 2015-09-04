var Character  = function(name) {
	this.name = name;
	this.location = 0;
	this.inventory = [];
};

Character.prototype.show_inventory = function() {
	if (this.inventory.length > 0) {
			console.log("You have: ");
			this.inventory.forEach(function(item){
				console.log("- " + item)
			});
	}	else {
			console.log("You do not have any items.");
	}
}

Character.prototype.addItem = function(item) {
	this.inventory.push(item);
}

Character.prototype.dropItem = function (item) {
	var item_index = this.inventory.indexOf(item);
	this.inventory.splice(item_index,1);
}

Character.prototype.checkItem = function (item) {
	return (this.inventory.indexOf(item) >-1);
}

module.exports = Character;	
