function findLongestSubstring (str) {
	// create 3 variables, one for the longest substring so far to keep track
	// one object to keep track of letters
	// one to keep track of a starting variable of 0
	let longest = 0;
	let seen = {};
	let start = 0;
	// start a for loop that starts from one end of the string to the end
	for (let i = 0; i < str.length; i++) {
		//making a charactermap basically
		let char = str[i];
		// look in the object for the character in the str were on to see if it exists
		if (seen[char]) {
			// if it exists, what is larger the variable start (which starts at 0) or the amount of times the character has appeared
			start = Math.max(start, seen[char]);
		}
		// index - beginning of substring + 1 (to include current in count)
		// if it doesn't exist, were going to see which is larger, longest (which starts at 0, so no)
		// or the index of which character were currently at, minus whereever it was we started and add 1 to account for the 0 index
		// that will give us the length of the current window and we set longest to whichever is largest to keep track of the longest substring
		longest = Math.max(longest, i - start + 1);
		// store the index of the next char so as to not double count
		seen[char] = i + 1;
	}
	return longest;
}
