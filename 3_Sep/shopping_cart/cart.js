var ShoppingCart = function () {
	this.cart_items = [];
};

//Adds item to "cart_items" and prints confirmation
ShoppingCart.prototype.addItem = function(item) {
		this.cart_items.push(item);
		console.log("Adding " + item.name + " to the cart at a price of $" 
			+ item.price);
	};

//Removes item_name from "cart_items", uses  indexOf
ShoppingCart.prototype.removeItem = function(item_name, qty) {
		qty = qty || this.cart_items.length;
		index = this.cart_items.map(function (item) {return item.name}).indexOf(item_name);
		while (qty > 0 && index > -1 ) {
			this.cart_items.splice(index,1);
			index = this.cart_items.map(function (item) {return item.name}).indexOf(item_name);
			qty -= 1;
		}
};


// //Removes item_name from "cart_items", uses sort
// ShoppingCart.prototype.removeItem = function(item_name, qty) {
// 	 qty = qty || this.cart_items.length;
// 	this.cart_items.sort(function(a,b){
// 		if (a.name === item_name) {
// 			return -1;
// 		} else {
// 			return 1;
// 		}
// 	});

// 	while (this.cart_items[0].name === item_name && qty > 0) {
// 		this.cart_items.shift();
// 		qty -=1;
// 	}
// };


// apple discount buy one get one free
ShoppingCart.prototype.apple_discount = function() {
		var apples = this.cart_items.filter(function(item) {
			return item.name === "apple";
			});
		if (apples.length > 1){
			return (Math.floor(apples.length/2) * apples[0].price);
		} else {
		return 0;
		} 	
	}

//apply orange discount, buy 5 get 5 at 50% off
ShoppingCart.prototype.orange_discount = function() {
		var oranges = this.cart_items.filter(function(item) {
			return item.name === "orange";
			});
		if (oranges.length >= 10){
			return (Math.floor(oranges.length/10) * 2.5 * oranges[0].price);
		} else {
		return 0;
		} 	
	}

	//calculates cart total and applies 10% discount for > 5 items
ShoppingCart.prototype.total = function() {
		var total_price = 0;
		total_price = this.cart_items.reduce(function(total, item) { 
			return (total + item.price); }, 0);

		total_price -= (this.apple_discount() + this.orange_discount());
		if (this.cart_items.length > 5) {
			total_price = 0.90 * total_price;
		}

		return total_price;
	};

ShoppingCart.prototype.showCart = function() {
	for (var i = 0; i < this.cart_items.length; i++) {
		console.log((i+1) +". " + this.cart_items[i].name);
	};
};



module.exports = ShoppingCart;