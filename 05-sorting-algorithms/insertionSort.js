// I find this one pretty complicated

function insertionSort (arr) {
	// start a for loop that begins with the second variable
	for (let i = 1; i < arr.length; i++) {
		// use currentVal as a temporary variable for arr[i]
		let currentVal = arr[i];
		// start another for loop that is going to look at the value in the array to the right of arr[i]
		// the conditional statement is where it gets confusing, since were working backward from right to left
		// we want it to continue only if were at an index above 0
		// the for loop will also only continue to run IF the number in front of arr[i] is greater than the current value (arr[i] in first pass, then the currentVal in subsequent passes)
		// so if the number in front of arr[i] is greater (first pass), we know it needs to move over
		for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			//we take the number after arr[j] which comes after arr[i] and we swap that to arr[j]
			//then we set arr[j] to the temporary variable currentVal
			arr[j + 1] = arr[j];
			arr[j] = currentVal;
		}
	}
	return arr;
}
