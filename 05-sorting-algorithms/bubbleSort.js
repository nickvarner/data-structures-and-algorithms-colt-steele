// bubblesort pseudocode
// - start looping from the end of an array with a variable called i
// - start an inner loop with a variable called j from the beginning until i - 1
// - if arr[j] is greater than arr[J+1], swap those two values
// return the array

// this is my favorite one
function bubbleSort (arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ];
			}
		}
	}
	return arr;
}

function bubbleSort2 (arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ];
			}
		}
	}
	return arr;
}

bubbleSort([ 37, 8, 12, 88, 29, 44, 559, 20, -3 ]);
bubbleSort2([ 37, 8, 12, 88, 29, 44, 559, 20, -3 ]);

// we can make a simple change that will optimize our code. basically, if we did a loop and no swaps took place that means it's already in order and we're done.

function bubbleSort (arr) {
	let noSwaps;
	for (let i = 0; i < arr.length; i++) {
		noSwaps = true;
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ];
				noSwaps = false;
			}
		}
		// this is the optimized solution with the noSwaps variable
		if (noSwaps) break;
	}
	return arr;
}
