// radix sort helper methods, first is getDigit which
// returns the digit in num at the given place value
// here's a solution stolen from stack overflow

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// the next helper function will be digitCount to tell us how many digits are in the number

function digitCount(num) {
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

// next one is getMostDigits. when given an array of numbers returns the number of digits in the largest numbers in the list

function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}

// Radix Sort Pseudocode
// - Define a function that accepts a list of numbers
// - Figure out how many digits the largest number has
// - Start a loop from 0 up to k (largest number of digits)
// - For each iteration of the loop we need to:
//     - Create buckets for each digit (an array, with 10 subarrays)
//     - place each number in the correct bucket BASED on its kth digit
// - Replace our existing array with values in our buckets starting with 0 and continuing until 9 (use concat)
// - Return the list of numbers at the end 

function radixSort(nums){
    let digitsMax = mostDigits(nums);
    for(let k = 0; k < digitsMax; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])
        for(let i = 0; i < nums.length; i++) {
            digitBuckets[getDigit(nums[i], k)].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums;
}