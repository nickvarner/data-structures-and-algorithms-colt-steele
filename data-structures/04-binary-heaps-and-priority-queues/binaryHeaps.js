// we''ll implement the binary heap as an array
// for any index of an array n...
// the left child is, n*2 + 1 // 2n + 1
// the right child is at, n*2 + 2 // 2n + 2

// for any child node at index n...
// its parent is at index (n-1)/2 and floor it

class MaxBinaryHeap {
	constructor () {
		this.values = [];
	}
	insert (val) {
		// push the value into the values array on the heap
		// bubble up: (swap with parent if its larger)
		// create a vvariable called index which is the length of the values property -1
		// create a variable called parentIndex which is the floor of (index-1)/2
		// keep looping as long as the values element at the parentIndex is less than the values element at the child index
		// swap the value of the values element at the parentIndex with the value of the element property at the child index
		// set the index to the parentIndex and start over
		this.values.push(val);
		this.bubbleUp();
	}
	bubbleUp () {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if (element <= parent) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}
	whatIsParentIdx (el) {
		let elIdx = this.values.indexOf(el);
		if (this.values[0] === this.values[elIdx]) return ` this is the root element and therefore the largest element`;
		if (this.values[1] === this.values[elIdx])
			return ` this is the second largest element so its parent must be  ${this.values[0]}`;
		return `the index is ${Math.floor((this.values.indexOf(el) - 1) / 2)}, so the parent is ${this.values[
			Math.floor((this.values.indexOf(el) - 1) / 2)
		]} ${this.isBigger(el)}`;
	}
	isBigger (el) {
		if (this.values[Math.floor((this.values.indexOf(el) - 1) / 2)] > el) {
			return ` and it is bigger than its child`;
		} else {
			return ` and it is smaller than its child, so its not a binary heap`;
		}
	}
	extractMax () {
		if (this.values.length <= 0) {
			return 'must have more than one value in the values heap';
		}
		// swap the first value in the values property with the last one
		[ this.values[0], this.values[this.values.length - 1] ] = [
			this.values[this.values.length - 1],
			this.values[0]
		];
		// pop from the values property, so you can return the value at the end
		let oldRoot = this.values.pop();
		// have the new root 'sink down' to the correct spot
		this.sinkDown();
		// return the old root
		return oldRoot;
	}
	sinkDown () {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];
		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild > element) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
					swap = rightChildIdx;
				}
			}

			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(33);
heap.insert(41);
heap.insert(18);
heap.insert(39);
heap.insert(12);
heap.insert(27);
console.log('[55, 39, 41, 18, 27, 12, 33]');
console.log(heap);
