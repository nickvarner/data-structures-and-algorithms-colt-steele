// this pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data

// this pattern can termendously decrease time complexity

// now for the classic example
///----------------
/// e x a m p l e
///----------------

// given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located
// if the value is not found, return -1

//this is my attempt at doing it
// colt has labeled this the naive solution
// this is called linear search
// ***
// O(N)
// ***

function search (arr, num) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) {
			return i;
		}
	}
	return -1;
}

// this is a better way to do it for time complexity
// this is called binary search, and the array must be sorted
//***
// Log(N)
//***

const binarySearch = (array, val) => {
	let min = 0;
	let max = array.length - 1;

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		let currentElement = array[middle];

		if (currentElement < val) {
			min = middle + 1;
		} else if (currentElement > val) {
			max = middle - 1;
		} else {
			return middle;
		}
	}
	return -1;
};

search([ 1, 2, 3, 4, 5, 6 ], 4); // 3
search([ 1, 2, 3, 4, 5, 6 ], 6); // 5
search([ 1, 2, 3, 4, 5, 6 ], 11); // -1
