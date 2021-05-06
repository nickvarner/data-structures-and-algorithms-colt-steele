// Implement a function called, areThereDuplicates which accepts a variable number of arguements, and checks whethere there are any duplicates among the arguments passed in.

function areThereDuplicates () {
	let collection = {};
	for (let val in arguments) {
		collection[val] = collection[val] + 1 || 1;
	}
	for (let key in collection) {
		if (collection[key] > 1) return true;
	}
	return false;
}

areThereDuplicates(1, 2, 3);
areThereDuplicates(1, 2, 2);
areThereDuplicates('a', 'b', 'c', 'a');
