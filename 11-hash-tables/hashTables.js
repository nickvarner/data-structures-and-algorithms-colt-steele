// let's write out first hash function
// What makes a good hash function?

// 1. Fast (ie constant time)
// 2. Doesn't cluster outputs at specific indices, but distributes uniformly
// 3. Deterministic (same input yields the same output)

// const hash = (key, arrayLength) => {
// 	let total = 0;
// 	// loop over the 'key' string
// 	for (let char of key) {
// 		// map 'a' to 1, 'b' to 2, 'c' to 3, 'd' to 4.. etc.
// 		let value = char.charCodeAt(0) - 96;
// 		total = (total + value) % arrayLength;
// 	}
// 	return total;
// };

// hash('pink', 10); // 0
// hash('purple', 10); // 8
// hash('cyan', 10); // 3

// problems
// 1) only hashes strings
// 2) not constant time - linear in key length
// 3) could be a little more random

// !!** our hash function **!!
function hash (key, arrayLen) {
	let total = 0;
	let WEIRD_PRIME = 31;
	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i];
		let value = char.carCodeAt(0) - 96;
		total = (total * WEIRD_PRIME + value) % arrayLen;
	}
	return total;
}

//!!** our hashtable class **!!

class HashTable {
	constructor (size = 53) {
		this.keyMap = new Array(size);
	}
	_hash (key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}
	set (key, value) {
		// accepts a key and a value
		// hashes the key
		let index = this._hash(key);
		// stores they key-value pair in the hash table array via separate chaining
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([ key, value ]);
	}
	get (key) {
		// accepts a key
		// hashes the key
		let index = this._hash(key);
		// retrieve the key value pair
		if (this.keyMap[index]) {
			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (this.keyMap[index][i][0] === key) {
					return this.keyMap[index][i][1];
				}
			}
		} else {
			return 'nothing found with that key';
		}
	}
	keys () {
		// loop through the hash table array and returns an array of keys in the table
		// typically you only return the unique 'values'
		let keys = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!keys.includes(this.keyMap[i][j][0])) keys.push(this.keyMap[i][j][0]);
				}
			}
		}
		return keys;
	}
	values () {
		// loops through the hash table array and returns an array of values in the table
		// typically you only return the unique 'values'
		let values = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!values.includes(this.keyMap[i][j][1])) values.push(this.keyMap[i][j][1]);
				}
			}
		}
		return values;
	}
}

let hashedTable = new HashTable(17);
hashedTable.set('dinner is good', 'salmon');
hashedTable.set('dinner is good', 'porkchop casserole');
hashedTable.set('i love tacos', 'chicken');
hashedTable.set('but i also love burritos', 'steak');
hashedTable.set('passwords and food', 'swordfish');
hashedTable.set('pulled', 'pork');
hashedTable.set('bacon types', 'pork');
hashedTable.set('hi', 'bye');
