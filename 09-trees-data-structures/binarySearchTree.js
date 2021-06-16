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
		// create a new node
		let newNode = new Node(val);
		// is there a root? if not, it becomes the root
		if (!this.root) return (this.root = newNode);
		greaterOrNot(newNode, this.root);
	}
	find (val) {
		if (!this.root) return false;
		return findVal(val, this.root);
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
