// example
// write a function called sumZero which accepts a SORTED array of integers. The function should find the first pair where the sumn is 0. Return an array that includes both values that sum to zero or undefinted if a pair does not exist.

//bad way to solve, o(n)^2
const sumZero = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j < arr.length - 1; j++) {
			if (arr[i] + arr[j] === 0) {
				return [ arr[i], arr[j] ];
			}
		}
	}
};

//lets solve it with the multiple pointer pattern solution

function sumZeer (arr) {
	//create the first two pointers using their starting index, in this case-- on the opposite sides of one another
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [ arr[left], arr[right] ];
			// if the sum is greater than 0, move right down one
		} else if (sum > 0) {
			right--;
			// otherwise (so if the sum is less than 0) move left up one
		} else {
			left++;
		}
	}
}

// let's look at another problem using the multiple pointer solution, except the pointer will both be on the left side

// implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. There can be negative numbers, but it will always be sorted

//this solution works, but it doesn't use multiple pointers, but there's zero reason you shouldn't use it for an interview unless they aren't alloweing ES5 syntax
const countUniqueValues = (arr) => {
	let charMap = {};
	for (let num of arr) {
		charMap[num] = charMap[num] + 1 || 1;
	}
	return Object.keys(charMap).length;
};
