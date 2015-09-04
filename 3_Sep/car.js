var Car = function(brand) {
	this.brand = brand;
	this.speed = 0;

// 	// Adds "acc" to speed
// 	this.accelerate = function(acc) {
// 		this.speed += acc;
// 	};

// 	// Subtracts "dec" from speed
// 	this.brake = function(dec) {
// 		this.speed -= dec;
// 	};

// 	// Prints to screen current state of Car
// 	this.printState = function() {
// 		console.log(this.brand + " at " + this.speed + " mph");
// 	};
 };

// alternately move methods outside initialization

Car.prototype.accelerate = function(acc){
	this.speed += acc;
};

Car.prototype.brake = function(dec){
	this.speed -= dec;
};

Car.prototype.printState = function() {
		console.log(this.brand + " at " + this.speed + " mph");
};

var my_car = new Car("MGB");

my_car.printState();

my_car.accelerate(50);

my_car.printState();

my_car.brake(10);

my_car.speed = 100;

my_car.printState(); 