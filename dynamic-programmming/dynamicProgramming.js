// lets solve a couple problems with dynamic programming
// BEST way to accomplish this, similar to what I had tried, buut wasn't successful because of the new function call not saving values in the cache
// pass the cache into the function call

// time complexity for this recursive solution is absolutely terrible
// well what if we could limit the number of operations, by storing the values somewhere

// ENTER MEMOIZATION
// storing the results of expensive function calls and returning the cached result when the same inputs occur again

const fibAlt = (n, memo = {}) => {
	if (memo[n]) return memo[n];
	if (n <= 2) return 1;
	var result = fib(n - 1, memo) + fib(n - 2, memo);
	memo[n] = result;
	return result;
};

// short way

const fibAlt2 = (n, memo = []) => {
	return;

		memo[n] !== undefined ? memo[n] :
		n <= 2 ? 1 :
		(memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
};

// fibonacci sequence
// using a memoization function and slow fib function
const slowFib = (n) => {
	if (n <= 2) return n;
	return fib(n - 1) + fib(n - 2);
};

const memoize = (fn) => {
	const cache = {};
	return function (...args) {
		if (cache[args]) return cache[args];
		const result = fn.apply(this, args);
		cache[result] = args;
		return result;
	};
};

const fib = memoize(slowFib);

// typically we've been working from the top-down, let's learn a new method involving bottom-up
// !!** TABULATION **!!
//    storing the result of a previous result in a table (usually an array)
//    usually done using iteration
//    better space complexity can be achieved using tabulation

function fibTab (n) {
	if (n <= 2) return 1;
	var fibNums = [ 0, 1, 1 ];
	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}
	return fibNums[n];
}
