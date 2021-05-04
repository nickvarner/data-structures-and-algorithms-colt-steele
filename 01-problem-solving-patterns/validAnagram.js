// Given two strings write a function to determine if the second string is an anagram of the first. An anagram is a word phrase or name formed by rearranging the letter of another such as cinema and iceman.An
// this is a way to use it for the multiple pointer questions as well
// function validAnagram (str1, str2) {
// 	// create two empty objects that were going to use to map characters of each string and their frequency
// 	let charMap1 = {};
// 	let charMap2 = {};
// 	//if they have different lengths we can return false right away
// 	if (str1.length !== str2.length) {
// 		return false;
// 	}
// 	//loop through the str1 and either add to the charmap or create it
// 	for (let letter of str1) {
// 		charMap1[letter] = charMap1[letter] + 1 || 1;
// 	}
// 	//loop through the str2 and either add to the charmap or create it
// 	for (let letter of str2) {
// 		charMap2[letter] = charMap2[letter] + 1 || 1;
// 	}
// 	for (let char in charMap1) {
// 		if (charMap1[char] !== charMap2[char]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

function validAnagram (str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	const lookup = {};

	for (let i = 0; i < str1.length; i++) {
		let letter = str1[i];
		//if letter exists, increment, otherwise set to 1

			lookup[letter] ? (lookup[letter] += 1) :
			(lookup[letter] = 1);
	}
	for (let i = 0; i < str2.length; i++) {
		let letter = str2[i];
		if (!lookup[letter]) {
			return false;
		} else {
			lookup[letter] -= 1;
		}
	}
	return true;
}

validAnagram('', '');
validAnagram('aaz', 'zza');
validAnagram('qwerty', 'qeywrt');
validAnagram('awesome', 'awesom');
