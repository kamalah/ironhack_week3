// console.log("hello world");

// var i = 1;

// while (i <= 5) {
// 	console.log(i);
// 	i ++;
// }

// for (i = 1; i <= 5; i+=1){
// 	console.log(i);
// }

// var foods = [ "pizza", "cookies", "bread"];
// foods.forEach(function(food) {
// 	console.log(food.toUpperCase());
// 	}
// );

// function multArray (arr, num) {
// 	return arr.map(function mult(ind) {
// 		return (ind * num);
// 	});
// }

// var a= [1, 2, 3];
// var a2 = multArray(a,4)

// console.log(a2)

// var a = [1,2,3];

// function myLog (x) {
// 	console.log(x);
// }

// function myForEach (arr,func) {
// 	for (var i = 0; i < arr.length; i ++){
// 		func(arr[i]);
// 	}
// 	// arr.forEach(func);
// }

// myForEach(a, myLog);

var numbers ='80:70:90:100'
averageColon(numbers);

function averageColon(numbers){
	var number_array = numbers.split(':').map(Number);
	
	sum = number_array.reduce(function(total, num){ return (total + num); });
	// sum = 0;
	// number_array.forEach(function(num) {sum+=num;})
	var avg = sum/number_array.length;

	console.log(avg);
}

function calculateStats (numbers) {
 	var number_array = numbers.split(':').map(Number);
	
	var sum = number_array.reduce(function(total, num){ return (total + num); });
	
	var avg = sum/number_array.length;

	var sorted = number_array.sort();
	var max = sorted.pop();

	return {sum: sum, avg: avg, max: max};
}

// function sum_num (number_array) {
// 	return number_array.reduce(function(total, num){ return (total + num); });
// }

// function average (number_array) {
// 	return (sum_num(number_array)/number_array.length);
// }

// function max_num(number_array){
// 	var sorted = number_array.sort();
// 	return sorted.pop();
// }

// function calculateStats (numbers){
// 	var number_array = numbers.split(':').map(Number);
// 	var sum = sum_num(number_array);
// 	var avg = average(number_array);
// 	var max = max_num(number_array);

// 	return {sum: sum, avg: avg, max: max};
// }

var number = '20:10:30';
var result = calculateStats(number);	 

console.log("Avg: " + result.avg);
console.log("Sum: " + result.sum);
console.log("Max: " + result.max);