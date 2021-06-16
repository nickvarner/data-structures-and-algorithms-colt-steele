// create the node, it stores a piece of data, we'll use val
// and a reference to the next node

class Node {
	constructor (val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor () {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push (val) {
		// should accept a new value
		// create a new node using the value passed to the function
		// if there is no head property, then set both the head and tail to be the newly created node
		// otherwise set the property on the tail to be the new node and set the tail property on the list to be the newly created node
		// increase the length
		// return the list
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop () {
		// if there are no nodes in the leist, return undefined
		// loop through the entire list until you reach the tail
		// set the next property of the second to last node to be null
		// set the tail to be the 2nd to last node
		// decrement the list by 1
		// return the value of the node removed
		//
		if (!this.head) {
			return undefined;
		}
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	shift () {
		// if theres no nodes, return undefined
		// store the current head property in a variable
		// set the head property to be the current head's next property
		// decrement the length by 1
		// return the value of the node removed
		if (!this.head) {
			return;
		}
		let temp = this.head;
		this.head = temp.next;
		length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return temp;
	}
	unshift (val) {
		// create a new node using the value passed to the function
		// if there is no head property on the list, set the head and tail to be the newly created node
		// otherwise set the newly created node's next property to be the current head property on the list
		// set the head property on the list to be newly created node
		// increment the length by 1
		// return the list
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get (idx) {
		let counter = 0;
		let current = this.head;
		if (idx < 0 || idx >= this.length) {
			return null;
		}
		while (counter !== idx) {
			current = current.next;
			counter++;
		}
		return current;
	}
	set (idx, val) {
		let foundNode = this.get(idx);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
	insert (idx, val) {
		let newNode = new Node(val);
		// if the index is less than 0 or greater than the length return false
		if (idx < 0 || idx > this.length) return false;
		// if the index is the same as the length, push a new node to the end of the list
		if (idx === this.length) return !!this.push(val);
		// if the index is 0- unshift a new node to the start of the list
		if (idx === 0) return !this.unshift(val);
		// otherwise using the get method, access the node at the index -1
		// set the next property on that node to be the new node
		// set the next property on the new node to be the previous next
		// increment the length
		// return true
		let prevNode = this.get(idx - 1);
		let temp = prevNode.next;
		prevNode.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}
	remove (idx) {
		// if the index is less than 0 or greater than the length return undefined
		// if the index is the same as the length -1, pop
		// if the index is equal to 0, shift
		// otherwise using the get method access the node at the idx - 1
		// set the nex tproperty on that node to be the next of the next node
		// decrement the length
		// return the value of the node removed
		if (idx < 0 || idx >= this.length) return undefined;
		if (idx === this.length - 1) return this.pop();
		if (idx === 0) return this.shift();
		let node = this.get(idx - 1);
		let temp = node.next;
		node.next = temp.next;
		this.length--;
		return temp;
	}
	print () {
		var arr = [];
		var current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
	reverse () {
		// create a variable called node and initialize it to the head property
		// swap the head and the tail
		// create a variable called next
		// create a variable called previous
		// loop through the list
		// set next to be the next property on wahtever node is
		// set previous to be the value of the node variable
		// set the node variable to be the value of the next variable
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
	}
}

let list = new SinglyLinkedList();
list.push('Hello ');
list.push('there! ');
list.push('How');
list.push(' are');
list.push(' you?');
