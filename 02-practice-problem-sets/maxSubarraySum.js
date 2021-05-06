const maxSubarraySum = (arr, num) => {
	// create two different variables, the temporary sum that's being used for each set of numbers you're summing together
	// and the maxSum which holds the maximum sum thusfar
	let maxSum = 0;
	let tempSum = 0;
	// factor in the edge case that would cause the algorithm to not work correctly
	if (arr.length < num) return null;
	// start a for loop that creates the first sum, so for the case below where it's 3, it's going to sum up the first 3 numbers
	// once we get that, that's it
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	// now we have our first sum, and because its our first sum, it's also our maxsum, and we need it to compare for the rest of the problem so it will also be the tempSum just for starting out
	tempSum = maxSum;
	// here's where the magic happens, we're going to slide the sum over and only factor 2 other, we'll subtract the first index of the array and add in the next index of the array
	for (let i = num; i < arr.length; i++) {
		// this will create a new tempSum
		// so grab the temporary sum and we subtract the first number, than add the next number in the array and create a new temporary sum
		tempSum = tempSum - arr[i - num] + arr[i];
		// then we need to check which number is higher, either the maxSum or the newSum we came up with, then we continue to do the same for the rest of the array in the for loop
		// you can use math.max or an if statement of course
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
};
