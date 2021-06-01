class Node {
	constructor (val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor () {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push (val) {
		// create a new node with the value passed to the function
		// if the list is empty, the head and tail are the newly created node
		// if not set the next property on the tail to be that node
		// set the previous property on the newly created node to be the tail
		// set the tail to be the newly created node
		// increment the length
		// return the list
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop () {
		// if there is no head, return undefined
		if (!this.head) {
			return undefined;
		}
		// store the current tail in a variable to return later
		let oldTail = this.tail;
		// if the length is 1, set the head and the tail to be null
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			// update the tail to be the previous node
			// set the oldTail's next to null
			this.tail = oldTail.prev;
			this.tail.next = null;
			oldTail.prev = null;
		}
		this.length--;
		return oldTail;
	}
	shift () {
		// if there is no head, return undefined
		if (!this.head) {
			return undefined;
		}
		// store the current head in a variable to return later
		let oldHead = this.head;
		// if the length is 1, set the head and the head to be null
		if (this.length === 1) {
			this.head = null;
			this.head = null;
		} else {
			// update the head to be the next node
			// set the oldHead's prev to null
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}
	unshift (val) {
		// create a new node with the val passed in
		// if the length is 0, set the head and tail to be the new node
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			// otherwise set the prev property on the head to be the new node
			// set the next property on the newnode to be the head property
			// update the head to be the new node
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get (idx) {
		// if the index is less than 0 or greater or equal to the length return null
		// if the index is less than or equal to half the length of the list
		// loop through the list starting from the head and loop toward middle
		// return the node once it is found
		// if the index is greater than half the length of the list
		// loop through the list starting from the tail and loop towards the middle
		// return the node once it is found
		if (idx < 0 || idx >= this.length) return null;
		const mid = Math.floor(this.length / 2);
		if (idx <= mid) {
			let counter = 0;
			var node = this.head;
			while (idx !== counter) {
				node = node.next;
				counter++;
			}
		} else {
			let counter = this.length - 1;
			var node = this.tail;
			while (idx !== counter) {
				node = node.prev;
				counter--;
			}
		}
		return node;
	}
	set (idx, val) {
		let currentNode = this.get(idx);
		if (foundNode) {
			currentNode.val = val;
			return true;
		}
		return false;
	}
	insert (idx, val) {
		// if the index is less than zero or greater than or equal to the length, return false
		if (idx < 0 || idx >= this.length) return false;
		// if the index is 0, unshift
		if (idx === 0) return !!this.unshift(val);
		// if the index is the same as the length, use push
		if (idx === this.length) return !!this.push(val);
		// use the get method to access the index - 1
		let newNode = new Node(val);
		let prevNode = this.get(idx - 1);
		let nextNode = prevNode.next;
		// set the next and prev properties on the correct nodes to link everything together
		prevNode.next = newNode;
		newNode.prev = prevNode;
		newNode.next = nextNode;
		nextNode.prev = newNode;
		// increment the length
		this.length++;
		// return true
		return true;
	}
	remove (idx) {
		// if the idx is less than 0 or greater or equal to the length return undefined
		if (idx < 0 || idx >= this.length) return undefined;
		// if the idx is 0, use shift
		if (idx === 0) return !!this.shift();
		// if the idx is the same as the length - 1, pop
		if (idx === this.length - 1) return !!this.pop();
		// use get get method to retieve the item to be removed
		let removedNode = this.get(idx);
		// update the next and prev properties to remove the found node from the list
		removedNode.prev.next = removedNode.next;
		removedNode.next.prev = removedNode.prev;
		// set prev and next to null on the found node
		removedNode.prev = null;
		removedNode.next = null;
		// decrement the length
		this.length--;
		// return the node
		return removedNode;
	}
}

let list = new DoublyLinkedList();
list.push(5);
list.push(6);
list.push(9);
list.push(11);
list.push(13);
list.push(15);
list.push(16);
list.push(18);
list.push(19);
list.push(23);
