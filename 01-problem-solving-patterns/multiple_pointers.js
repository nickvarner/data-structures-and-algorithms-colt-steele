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
// multiple pointer solution
// try to explain this here
// i
// [1, 1, 1, 2, 3, 3, 4, 4, 5, 6]
//     j
// i and j are the same, so were going to leave i there and move j forward
// i
// [1, 1, 1, 2, 3, 3, 4, 4, 5, 6]
//        j
// i and j are the same, so were going to leave i there and move j forward
// i
// [1, 1, 1, 2, 3, 3, 4, 4, 5, 6]
// 	      j
// j acts as a scout, i and j are now different or unique, so we'll move i forward, swap j's value to i and move j forward
//     i
// [1, 2, 1, 2, 3, 3, 4, 4, 5, 6]
// 	      j
// next one looks like this (unique/swap)
//        i
// [1, 2, 3, 2, 3, 3, 4, 4, 5, 6]
// 	            j
// by the end we've moved i for every unique pair and this is what it looks like
// so i's index (plus one to include 0) will be the number of unique values
//                 i
// [1, 2, 3, 4, 5, 6, 4, 4, 5, 6]
//                             j

print('you need to work on this one, you get the for loop backward in regard to the if statement');
print(
	'remember if they ARE equal we want j to move up, so we need to create the conditional statement only when they are not equal by moving i up and swapping their values'
);
print(
	'this wont always be in numerical order. we just have to swap them because we need them to not be equal to the loop can move forward'
);
print('and the index is basically our counter. this is more confusing way to solve it than above imo');
function countUniqueValues2 (arr) {
	if (arr.length === 0) return 0;
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}
