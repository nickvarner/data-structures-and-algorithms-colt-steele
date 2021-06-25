// let's write out first hash function
// What makes a good hash function?

// 1. Fast (ie constant time)
// 2. Doesn't cluster outputs at specific indices, but distributes uniformly
// 3. Deterministic (same input yields the same output)

const hash = (key, arrayLength) => {
	let total = 0;
	// loop over the 'key' string
	for (let char of key) {
		// map 'a' to 1, 'b' to 2, 'c' to 3, 'd' to 4.. etc.
		let value = char.charCodeAt(0) - 96;
		total = (total + value) % arrayLength;
	}
	return total;
};

hash('pink', 10); // 0
hash('purple', 10); // 8
hash('cyan', 10); // 3

// problems
// 1) only hashes strings
// 2) not constant time - linear in key length
// 3) could be a little more random
