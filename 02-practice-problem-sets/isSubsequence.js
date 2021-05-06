// write a function called subSequence which takes in two strings and checks whether the character in the first string for a subsequence of the characters in the second string.
// in other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

console.log('I FUCKING DID IT FIRST TRYYYYY BAABBAAAAAAY');
function isSubsequence (str1, str2) {
	let i = 0;
	for (let j = 0; j < str2.length; i++) {
		if (str1[i] === str2[j]) {
			i++;
		}
		if (i === str1.length) {
			return true;
		}
	}
	return false;
}

// solution given by instructor
function isSubsequence2 (str1, str2) {
	var i = 0;
	var j = 0;
	if (!str1) return true;
	while (j < str2.length) {
		if (str2[j] === str1[i]) i++;
		if (i === str1.length) return true;
		j++;
	}
	return false;
}

//recursive solution
function isSubsequence3 (str1, str2) {
	if (str1.length === 0) return true;
	if (str2.length === 0) return false;
	if (str2[0] === str1[0]) return isSubsequence3(str1.slice(1), str2.slice(1));
	return isSubsequence3(str1, str2.slice(1));
}
