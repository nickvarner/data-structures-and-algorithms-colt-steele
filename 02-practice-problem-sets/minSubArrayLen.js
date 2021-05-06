// write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// the function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the
// integer passed to the function. if there isn't one it should return 0

function minSubArrayLen (arr, sum) {
	let total = 0;
	let start = 0;
	let end = 0;
	let minLen = Infinity;
	// create a loop that starts at the beginning of the array and continues all the way to the end of the array
	while (start < arr.length) {
		// if the current total is less than the given sum AND end is less than the length of the array
		// add the array's number matching to end (0 in the beginning) and move the window to the right
		// our sliding window is start and end which starts as 0 and 0 and we increment end as we expand our window
		if (total < sum && end < arr.length) {
			total += arr[end];
			end++;
		} else if (total >= sum) {
			// if current window adds up to at least the sum given then
			// we can shrink the window
			// if our total is greater than or equal to the given sum, than we have reached the condition for the problem
			// we need to record the current length of our array by subtracting end from start and--AT FIRST-- updating
			// minLen
			minLen = Math.min(minLen, end - start);
			// then we need to subtract the first value and move our window up by incrementing the start variable
			total -= arr[start];
			start++;
		} else {
			// current total less than required total but we reach the end, need this or else we'll be in an infinite loop
			break;
		}
	}
	return
		minLen === Infinity ? 0 :
		minLen;
}
