// write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// your solution must have O(N) time complexity
// DON'T FORGET EDGE CASE (LENGTH) -- DON'T FORGET THAT ONLY STRINGS AND ARRAYS ARE ITERABLE

const sameFrequency = (number1, number2) => {
	let num1 = number1.toString();
	let num2 = number2.toString();
	if (num1.length !== num2.length) {
		return false;
	}
	let charMap1 = {};
	let charMap2 = {};
	for (let digit of num1) {
		charMap1[digit] = charMap1[digit] + 1 || 1;
	}
	for (let digit of num2) {
		charMap2[digit] = charMap2[digit] + 1 || 1;
	}
	for (let char in charMap1) {
		if (charMap1[char] !== charMap2[char]) {
			return false;
		}
	}
	return true;
};
