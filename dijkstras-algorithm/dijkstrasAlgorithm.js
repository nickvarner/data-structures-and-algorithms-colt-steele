// first thing we need to do is create a weighted graph

class PriorityQueue {
	constructor () {
		this.values = [];
	}
	enqueue (val, priority) {
		this.values.push({ val, priority });
		this.sort();
	}
	dequeue () {
		return this.values.shift();
	}
	sort () {
		this.values.sort((a, b) => a.priority - b.priority);
	}
}

class WeightedGraph {
	constructor () {
		this.adjacencyList = {};
	}
	addVertex (vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge (vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}
	dijkstra (start, end) {
		const distances = {};
		const adjacencyList = this.adjacencyList;
		let path = []; // to return at end
		const nodes = new PriorityQueue();
		const previous = {};
		let smallest;
		for (let i = 1; i < adjacencyList.length; i++) {
			if (i === start) {
				distances[i] = 0;
				nodes.enqueue(i, 0);
			} else {
				distances[i] = Infinity;
				nodes.enqueue(i, Infinity);
			}
			previous[i] = null;
		}
		previous[start] = null;
		distances[start] = 0;
		nodes.enqueue(start, 0);

		while (nodes.values.length) {
			smallest = nodes.dequeue().val;
			if (smallest === end) {
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}
			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbor in adjacencyList[smallest]) {
					let nextNode = adjacencyList[smallest][neighbor];
					let candidate = distances[smallest] + nextNode.weight;
					let nextNeighbor = nextNode.node;
					if (candidate < distances[nextNeighbor]) {
						distances[nextNeighbor] = candidate;
						previous[nextNeighbor] = smallest;
						nodes.enqueue(nextNeighbor, candidate);
					}
				}
			}
		}
		return path.concat(smallest).reverse();
	}
}

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

graph.dijkstra('A', 'E');

// Dijkstra's Pseudocode
// this function should accept a starting and ending vertex
// create an object (call it distances) and set each key to be every vertex in the adjaceny list with a value of infinity, except for the starting vertex which should have a value of 0
// after setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
// create another object called previous and set each key to be every vertex in the adjacency list with a value of null
const dijkstras = (start, end) => {
	const distances = {};
	const adjacencyList = this.adjacencyList;
	const nodes = new PriorityQueue();
	const previous = {};
	let smallest;
	for (let i = 1; i < adjacencyList.length; i++) {
		if (i === start) {
			distances[i] = 0;
			nodes.enqueue(i, 0);
		} else {
			distances[i] = Infinity;
			nodes.enqueue(i, Infinity);
		}
		previous[i] = null;
	}
	previous[start] = null;
	distances[start] = 0;
	nodes.enqueue(start, 0);
	// start looping as long as there is anything in the priority queue
	while (nodes.values.length) {
		// dequeue a vertex from the priority queue
		smallest = nodes.dequeue().val;
		// if that vertex is the same as the ending vertex - we are done!
		if (smallest === end) return; // need to build path
		if (smallest || distances[smallest] !== Infinity) {
			// otherwise loop through each value in the adjaceny list at that vertex
			for (let neighbor in adjacencyList[smallest]) {
				// find neighboring node
				let nextNode = adjacencyList[smallest][neighbor];
				// calculate the distance
				// calculate the distance to that vertex from the starting vertex
				let candidate = distances[smallest] + nextNode.weight;
				let nextNeighbor = nextNode.node;
				// if the distance is less than what is currently stored in our distances object
				if (candidate < distances[nextNeighbor]) {
					// update the distances object with new lower distance
					// updating new smallest distance to neighbor
					distances[nextNeighbor] = candidate;
					// update the previous object to contain that vertex
					// updating previous -- how we got to neighbor
					previous[nextNeighbor] = smallest;
					// enqueue in priority queue with new priority
					// enqueue the vertex with the total distance from the start node
					nodes.enqueue(nextNeighbor, candidate);
				}
			}
		}
	}
	return path.concat(smallest).reverse();
};
