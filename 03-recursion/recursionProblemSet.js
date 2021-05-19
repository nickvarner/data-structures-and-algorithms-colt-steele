// write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This funciton should mimic
// the functionality of Math.pow do no worrry about negative bases and exponents.

function power (base, exponent) {
	if (exponent === 0) return 1;
	return base * power(base, exponent - 1);
}

// write a function factorial which accepts a number and reutnrs the factorial of that number. A factorial is the product of an integer and all integers below it.

function factorial (num) {
	if (num === 0) return 1;
	return num * factorial(num - 1);
}

// write a function called productOfArray which takes in an array of numbers and return the product of them all

function productOfArray (arr) {
	if (arr.length === 0) return 1;
	return arr[0] * productOfArray(arr.slice(1));
}

// write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange (num) {
	if (num === 0) return 0;
	return num + recursiveRange(num - 1);
}

// write  a recursive function which accepts a number and returns the nth number in the Fibonacci sequence.

function fib (num) {
	if (num < 2) {
		return num;
	}
	return fib(num - 1) + fib(num - 2);
}

// extra credit, create memoize function to boost recursive speed

function memoize (fn) {
	//need to make a place to store the arguments and stuff
	const cache = {};
	//this function is basically the fib function
	return function (...args) {
		//look at the cache object with the args key, and if it exists then return it
		if (cache[args]) {
			return cache[args];
		}
		const result = fn.apply(this, args);
		cache[args] = result;

		return result;
	};
}

//create a memoizer function
const Fastfib = memoize(fib);
