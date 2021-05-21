// select sort pseudocode
// - create a minimum variable, which will be the first item in the array
// - compare the value to the minimum value
// - if the new value is less than the minimum, then assign that value to minimum
// - at the end of the loop, move the minimum to the beginning (swap) and start again
// - note: the value you're storing is the index of that value, NOT the actual value

function selectionSort (arr) {
	// start a loop that loops over every number in the array
	for (let i = 0; i < arr.length; i++) {
		// create a minimum variable inside the loop to hold the index of the minimum variable
		// remember: after the first loop, we compare all operators and have moved the lowest value to the first index, so we no longer need to ever look at the first index again -- it's already the smallest
		// since the lowest number is moved to the front of the array after comparing to all the other values (on the second loop iteration and after)
		// we will always assume the lowest number is always the next value in our array, which will follow i
		let indexOfMin = i;
		// now we need to start another loop to compare to the i, so we can't set it to 0 as well because that's the same
		// we always want to compare it to the next number, so it will i + 1
		for (let j = i + 1; j < arr.length; j++) {
			// the next number is always compared to the number before that, so i, or also indexOfMin
			if (arr[j] < arr[indexOfMin]) {
				// if that current number at index J is lower, then set the minimum index to that index, but we need to use the indexOfMin variable
				// to hold that index if it changes
				indexOfMin = j;
			}
		}
		// now that were done comparing all of the i index to the next index, lets compare again
		// did we change indexOfMin from i? was there a number lower found other than the i index?
		if (i !== indexOfMin) {
			// if we did we're going to swap! we swap the i index value with the minmum value and we start the loop again
			[ arr[indexOfMin], arr[i] ] = [ arr[i], arr[indexOfMin] ];
		}
	}
	return arr;
}
