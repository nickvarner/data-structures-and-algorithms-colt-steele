class Node {
	constructor (val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor () {
		this.root = null;
	}
	// insert using recursive function I made
	insert (val) {
		// recursive helper function I made for insert method
		function greaterOrNot (currentNode, parentNode) {
			if (currentNode.val === parentNode.val) return undefined;
			if (currentNode.val > parentNode.val) {

					parentNode.right ? greaterOrNot(currentNode, parentNode.right) :
					(parentNode.right = currentNode);
			} else {

					parentNode.left ? greaterOrNot(currentNode, parentNode.left) :
					(parentNode.left = currentNode);
			}
		}
		// create a new node
		let newNode = new Node(val);
		// is there a root? if not, it becomes the root
		if (!this.root) return (this.root = newNode);
		greaterOrNot(newNode, this.root);
	}
	find (val) {
		//recursive function to help with find method
		function findVal (val, node) {
			if (!node) return false;
			if (val === node.val) return node.val;
			if (val < node.val) {
				return findVal(val, node.right);
			} else {
				return findVal(val, node.left);
			}
		}
		if (!this.root) return false;
		return findVal(val, this.root);
	}
	// Breadth-first : working our way across the tree, from left to right
	// Steps for Breadth-first implementation (iteratively)
	breadthFirstSearch () {
		// - Create a queue (first in, first out structure), which can be an array (queue means you'll be using push/pop array methods), and a variable to store the values of nodes visited
		var queue = [];
		var data = [];
		var node = this.root;
		// - Place the root node in the queue
		queue.push(this.root);
		// - Loop as long as there is anything in the queue
		while (queue.length) {
			//   - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
			node = queue.shift();
			data.push(node.val);
			//   - If there is a left property on the node dequeued, add it to the queue
			if (node.left) queue.push(node.left);
			//   - If there is a right property on the node dequeued, and it to the queue
			if (node.right) queue.push(node.right);
		}
		// - Return the variable that stores the values
		return data;
	}
	dfsPreOrder () {
		if (!this.root) return undefined;
		// create a variable to store the values of nodes visited
		var data = [];
		// store  the root of the bst in a variable called current
		var current = this.root;
		// write a helper function which accepts a node
		function traverse (node) {
			// push the value of the node to the variable that stores the values
			data.push(node.val);
			// if the node has a left property, call the helper function with the left property on the node
			if (node.left) traverse(node.left);
			// if the node has a right property, call the helper function with the right property on the node
			if (node.right) traverse(node.right);
		}
		// invoke the helper function with the current variable
		traverse(current);
		return data;
	}
	dfsPostOrder () {
		if (!this.root) return undefined;
		// create a variable to store the values of nodes visited
		var data = [];
		// store  the root of the bst in a variable called current
		var current = this.root;
		// write a helper function which accepts a node
		function traverse (node) {
			// if the node has a left property, call the helper function with the left property on the node
			if (node.left) traverse(node.left);
			// if the node has a right property, call the helper function with the right property on the node
			if (node.right) traverse(node.right);
			// push the value of the node to the variable that stores the values
			data.push(node.val);
		}
		// invoke the helper function with the current variable
		traverse(current);
		return data;
	}
	dfsInOrder () {
		if (!this.root) return undefined;
		// create a variable to store the values of nodes visited
		var data = [];
		// store  the root of the bst in a variable called current
		var current = this.root;
		// write a helper function which accepts a node
		function traverse (node) {
			// if the node has a left property, call the helper function with the left property on the node
			if (node.left) traverse(node.left);
			// push the value of the node to the variable that stores the values
			data.push(node.val);
			// if the node has a right property, call the helper function with the right property on the node
			if (node.right) traverse(node.right);
		}
		// invoke the helper function with the current variable
		traverse(current);
		return data;
	}
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

/// ------------------------
/// colts iterative solutions
/// ------------------------

class Node {
	constructor (val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor () {
		this.root = null;
	}
	insert (val) {
		let newNode = new Node(val);
		if (this.root === null) {
			this.root = newNode;
			return this;
		} else {
			var current = this.root;
			while (true) {
				if (val === current.val) return undefined;
				if (val < current.val) {
					if (current.left === null) {
						current.left = newNode;
						return this;
					}
					current = current.left;
				} else {
					if (current.right === null) {
						current.right = newNode;
						return this;
					}
					current = current.right;
				}
			}
		}
	}
	find (val) {
		if (!this.root) return false;
		var current = this.root;
		while (true) {
			if (current.val === val) return current;
			if (val < current.val) {
				if (!current.left) return false;
				current = current.left;
			} else {
				if (!current.right) return false;
				current = current.right;
			}
		}
	}
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);
