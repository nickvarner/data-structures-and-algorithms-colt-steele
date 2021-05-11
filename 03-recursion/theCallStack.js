// in almost all program languages, there is a built in data structure that manges what happens when functions are invoked
// this is called the call stack -- a data structure, where a function goes when it is invoked
// when JS sees the return keyword or when the function ends, the compilier will remove (pop)

// YOU SHOULD WATCH A YOUTUBE VIDEO ABOUT HOW TO USE THE VS CODE DEBUGGER
function takeShower () {
	return 'Showering!!';
}

function eatBreakfast () {
	let meal = cookFood();
	return `Eating ${meal}!`;
}

function cookFood () {
	let items = [ 'Oatmeal', 'Smoothie', 'Bagel Sandwich', 'Protein Shake' ];
	return items[Math.floor(Math.random() * items.length)];
}

function wakeUp () {
	takeShower();
	eatBreakfast();
	console.log('Okay ready to go to work!');
}

wakeUp();
