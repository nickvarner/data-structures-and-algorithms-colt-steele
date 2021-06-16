// the queue class

class Node {
	constructor (val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor () {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	// enqueue is for adding (identical to push)
	enqueue (val) {
		// create a new node using value passed to the function
		var newNode = new Node(val);
		// check if theres anything in the queue
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			// set the next property on the current last to be that new node and then set the last property of the queue to be that node
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}
	// this is removing (removing FIFO) -- (identical to pop)
	dequeue () {
		// if there is no first property return null;
		if (!this.first) return null;
		// store the first property in a variable
		var firstNode = this.first;
		// see if the first is the same as the last (check if there is only one node). if so
		if (this.first === this.last) {
			// set the first and last to be null
			this.first = null;
			this.last = null;
		}
		// if there is more than 1 node, set the first property to be the next property of first
		this.first = this.first.next;
		// decrement the size by 1
		this.size--;
		return firstNode.val;
	}
}

// create a queue with an array
var q = [];
// add to the end
q.push('first');
q.push('second');
q.push('third');
// how do we remove from the beginning?
q.shift();
q.shift();
q.shift();
// lets re add them to the beginning
q.unshift('first');
q.unshift('second');
q.unshift('third');
// how do we get them back out again? well this time it would from the end, so we use pop to make sure the first in is the first out
q.pop();
q.pop();
q.pop();
// so we need to use push + shift - OR - unshift + pop
