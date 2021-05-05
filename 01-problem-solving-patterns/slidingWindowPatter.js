// this pattern involves creating a window which can either be an array or number from one position to another

// depending on a certain condition, the window either increases or closes (and a new window is created)

// very useful for keeping track of a subset of data in an array/string/etc

///---------------
/// e x a m p l e
///---------------

// write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

maxSubarraySum([ 1, 2, 5, 2, 8, 1, 5 ], 2); // 10
maxSubarraySum([ 1, 2, 5, 2, 8, 1, 5 ], 4); // 17
maxSubarraySum([ 4, 2, 1, 6 ], 1); // 6
maxSubarraySum([ 4, 2, 1, 6, 2 ], 4); // 13
maxSubarraySum([], 4); // null

// not the correct way to do it, the correct way is below
// O(N) ^ 2 complexity (not good)
const maxSubarraySum = (arr, num) => {
	// factor in what would break or what we need in order to do what we need to do
	// if num is greater than the length of the array, well it can't be done
	if (num > arr.length) return null;
	// set the maximum sum now. if its positive numbers you can use 0, but the question didn't say that
	let max = -Infinity;
	// start a for loop that goes from the beginning of the array and it will continue for as long as it can
	// depending on num, so if num is 2, we don't want to start another loop on the last item because then its only 1 item in that subset
	// also take the 0 index into account
	for (let i = 0; i < arr.length - num + 1; i++) {
		//create a temporary variable for the sum of this subset
		let temp = 0;
		//start another for loop that is going to add up the data in that subset
		for (let j = 0; j < num; j++) {
			temp += arr[i + j];
		}
		//if this new sum is larger than the previous max, then we have a new max sum
		if (temp > max) {
			max = temp;
		}
		console.log(temp, max);
	}
	return max;
};

// heres a refactor of sliding window and works better for time complexity
// O(N)

const maxSubarraySum2 = (arr, num) => {
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

maxSubarraySum2([ 2, 6, 9, 2, 1, 8, 5, 6, 3 ], 3);
