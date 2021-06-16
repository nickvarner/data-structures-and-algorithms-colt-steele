// implement stacks using a last in, first out fashion and using arrays

class Node {
	constructor (val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor () {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	// push pseudocode
	// function should accept a value
	// create a new node with that value
	push (val) {
		let newNode = new Node(val);
		// if there are no nodes in the stack, set the first and last properties to be the newly created node
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			// if there is at least one node, create a variable that stores the current first property on the stack
			let temp = this.first;
			// reset the first property to be the newly created node
			this.first = newNode;
			// set the nex tproperty on the node tyo be the previously created variable
			this.first.next = temp;
		}
		// increment the size of the stack
		this.size++;
		return this.size;
		// or return ++this.size;
	}
	pop () {
		// if there are no nodes in the stack, return null
		if (!this.first) {
			return null;
		}
		// create a temporary variable to store the first property on the stack
		var temp = this.first;
		// if there is only 1 node, set the first and last property to be null
		if (this.first === this.last) {
			this.last = null;
		}
		// if there is more than one node set the first property to be the next property on the current first
		this.first = this.first.next;
		this.size--;
		return temp.val;
	}
}
