// write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

function averagePair (arr, num) {
	if (arr.length < 0) return false;
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let avg = (arr[left] + arr[right]) / 2;
		if (avg === num) {
			return true;
		} else if (avg < num) {
			left++;
		} else {
			right--;
		}
	}
	return false;
}
