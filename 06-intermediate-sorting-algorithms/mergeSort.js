// the first step of mergeSort is building a merge function that merge's two sorted arrays

// Merging Arrays Pseudocode
// - create an empty array, take a look at the smallest values in each input array (should be the first of both arrays because they're sorted)
// - while there are still values we haven't looked at...
//     - if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
//     - if the value in the first array is large than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
//     - once we exhaust one array, push in all remaining values from the other array

function merge (arr1, arr2) {
	let results = [];
	let idx1 = 0;
	let idx2 = 0;
	while (arr1.length && arr2.length) {
		if (arr1[idx1] < arr2[idx2]) {
			results.push(arr1[idx1]);
			idx1++;
		} else {
			results.push(arr2[idx2]);
			idx2++;
		}
	}
	while (idx1 < arr1.length) {
		results.push(arr1[idx1]);
		idx1++;
	}
	while (idx2 < arr2.length) {
		results.push(arr2[idx2]);
		idx2++;
	}
	return results;
}

// now we have to mergeSort using our merge function!

// mergesort pseudocode
// - break up the array into halves until you have arrays that are empty or have one element (use the slice method!)
// - we need to get keep doing this until the size is 1 (base case)!
// - once you have smaller arrays until you are back at the full lenght of the array
// - once the arraay has been marged back together, return the merged (and sorteD) array

function mergeSort (arr) {
	if (arr.length === 1) {
		return arr;
	}
	let center = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, center));
	let right = mergeSort(arr.slice(center));
	return merge(left, right);
}
