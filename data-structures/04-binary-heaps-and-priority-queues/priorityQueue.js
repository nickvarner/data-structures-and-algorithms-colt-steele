// What is a priority queue?

// a data structure where each element as a priority. elements with higher priorities are servered before elements with lower priorities.
// essentially a MinBinaryHeap where priority 1 is the highest priority, and 5 is the lowest priority. Items with the highest priority should
// 'bubble up' to be first

// each node has a val, and priority. use the priority number to build the heap.
class Node {
	constructor (val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

// we'll need two methods for our PriorityQueue/MinBinaryHeap

class PriorityQueue {
	constructor () {
		this.values = [];
	}
	bubbleUp () {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if (element.priority >= parent.priority) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
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
				if (leftChild.priority < element.priority) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildIdx;
				}
			}

			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
	// enqueue method accepts a a value and a priority and puts it in the right spot based off of its priority
	enqueue (val, priority) {
		let newNode = new Node(val, priority);
		if (newNode.priority >= 3) {
			this.values.push(newNode);
		} else {
			this.values.unshift(newNode);
		}
		this.bubbleUp();
	}
	// dequeue methods removes the root element (highest priority), returns it, and rearranges heap using priority
	dequeue () {
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
}

let queue = new PriorityQueue();
queue.enqueue('brush teeth', 4);
queue.enqueue('comb hair', 3);
queue.enqueue('eat breakfast', 2);
queue.enqueue('make coffee', 1);
queue.enqueue('drink coffee', 1);
queue.enqueue('drink metamucil', 3);
queue;
