var Item = require('./item.js');
var ShoppingCart = require('./cart.js');

// apple: 10€ / $10
// orange: 5€ / $5
// grapes: 15€ / $15
// banana: 20€ / $20
// watermelon: 50€ / $50

var apple = new Item("apple", 10);
var orange = new Item("orange", 5);
var grapes = new Item("grapes", 15);
var banana = new Item("banana", 20);
var watermelon = new Item("watermelon", 50);

var cart = new ShoppingCart();

cart.addItem(apple);
for (var i = 0; i < 3; i++) {
	cart.addItem(orange);
	cart.addItem(grapes);
}
// cart.addItem(grapes);
// cart.addItem(banana);
// cart.addItem(watermelon);
// cart.addItem(apple);
// cart.addItem(apple);
cart.showCart();
cart.removeItem("orange",2);
console.log(cart.total());
cart.showCart();

