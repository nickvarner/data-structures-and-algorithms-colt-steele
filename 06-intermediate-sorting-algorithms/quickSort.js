// Pivot Pseudocode
// - It will help accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
// - Grab the pivot from the start of the array
// - Store the current pivot index in a variable (this will keep track of where the pivot should up)
// - Loop through the array from the start until the end
//     -If the pivot is greater than the current element, increment the pivot index vairable and then swap the current element with the element with the element at the pivot index
// - Swap the starting element with the pivot index
// - Return the pivot index

function pivot (arr, start = 0, end = arr.length - 1) {
	let pivotVal = arr[start];
	let swapIdx = start;
	for (let i = start + 1; i < arr.length; i++) {
		if (pivotVal > arr[i]) {
			swapIdx++;
			[ arr[i], arr[swapIdx] ] = [ arr[swapIdx], arr[i] ];
		}
	}
	[ arr[swapIdx], arr[start] ] = [ arr[start], arr[swapIdx] ];
	return swapIdx;
}

quickSort([ 2, 1, 4, 3, 5, 8, 7, 6, 51, 22, 33, 48, 96 ]);

// Quicksort Pseudocode
// - Call the pivot helper on the array
// - When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
// - Your base case occurs when you consider a subarray with less than 2 elements

function quickSort (arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIdx = pivot(arr, left, right);
		// left side
		quickSort(arr, left, pivotIdx - 1);
		// right side
		quickSort(arr, pivotIdx + 1, right);
	}
	return arr;
}
