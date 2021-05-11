// const checkForOdd = (arr) => {
//     if(arr.length === 0) return false
//     if(arr[0] % 2 > 0) {
//         return true
//     } else {
//         arr.shift()
//         checkForOdd(arr)
//     }
// }

// checkForOdd([3142, 5798, 6550, 5914])

function countDown (num) {
	// base case or where the function ends
	if (num <= 0) {
		console.log('LIFT OFF');
		return;
	}
	console.log(num);
	num--;
	countDown(num);
}

function sumRange (num) {
	// base case is below and it is almost always a
	// conditional statement
	if (num === 1) return 1;
	return num + sumRange(num - 1);
}

// most classic recursive is factorial
// 4! factorial equal, 4 *3 * 2 * 1

function factorial (num) {
	let total = 1;
	for (let i = num; i > 0; i--) {
		total *= i;
	}
	return total;
}

// how would we write this function -- RECURSIVELY?

function factorial (num) {
	if (num === 1) return 1;
	return num * factorial(num - 1);
}
