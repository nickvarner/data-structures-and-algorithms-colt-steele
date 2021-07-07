class Graph {
	constructor () {
		this.adjacencyList = {};
	}
	// adding a vertex/node
	// write a method called addVertex which accepts a name of a vertex
	// it should add a key to the adjacency list with the name of the vertex and set it's value to be an empty arrray
	addVertex (vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge (vertex1, vertex2) {
		// should accept two vertices, vertex1 and vertex2
		// the function should find in the adjancey list the key of vertex1 and push vertex2 to the array
		this.adjacencyList[vertex1].push(vertex2);
		// the function should find in the adjancy list the key of vertex2 and push vertex1 into the array
		this.adjacencyList[vertex2].push(vertex1);
	}
	removeEdge (vertex1, vertex2) {
		let filtered1 = this.adjacencyList[vertex1].filter((vert) => vert !== vertex2);
		this.adjacencyList[vertex1] = filtered1;
		let filtered2 = this.adjacencyList[vertex2].filter((vert) => vert !== vertex1);
		this.adjacencyList[vertex2] = filtered2;
	}
	removeVertex (vertex) {
		for (let edge of this.adjacencyList[vertex]) {
			this.removeEdge(vertex, edge);
		}
		delete this.adjacencyList[vertex];
	}
	DFSrecursive (vertex) {
		// recursive
		// create a list to store the end result, to be returned at the very end
		const results = [];
		// create an object to store your visited vertices
		const visited = {};
		const adjacencyList = this.adjacencyList;
		// create a helper function which accepts a vertex
		function depthFirst (vertex) {
			// this helper function should return early if the vertex is empty
			if (!vertex) return null;
			// the helper function should place the vertex it accepts into the visited object and push that vertex into the result array
			visited[vertex] = true;
			results.push(vertex);
			// loop over all the values in the adjacencyList for that vertex
			for (let edge of adjacencyList[vertex]) {
				// if any of those values have not been visited, recursively invoke the helper function with that vertex
				if (!visited[edge]) {
					depthFirst(edge);
				}
			}
		}
		depthFirst(vertex);
		return results;
	}
	DFSiterative (vertex) {
		// the function should accept a starting node
		// create a stack to help use keep track of vertices (use a list/array)
		// create a list to store the end result, to be returned at the very end
		// create an object to store visited vertices
		let stack = [ vertex ];
		let results = [];
		let visited = {};
		let currentVertex;
		// add the starting vertex to the stack, and mark it visited
		visited[vertex] = true;
		// while the stak has something in it:
		while (stack.length) {
			// pop the next vertex from the stack
			currentVertex = stack.pop();
			// add it to the result list
			results.push(currentVertex);

			// push all of its neighbors into the stack
			for (let neighbor of this.adjacencyList[currentVertex]) {
				// if that vertex hasn't been visited yet
				if (!visited[neighbor]) {
					// mark it as visited
					visited[neighbor] = true;
					// add it to the stack
					stack.push(neighbor);
				}
			}
		}
		// return the results array
		return results;
	}
	BDF (vertex) {
		// should accept a starting vertex
		// create a queue (array) place the starting vertex in it
		// create a result array to store the nodes visited
		// create an object to store nodes visited
		const adjacencyList = this.adjacencyList;
		const queue = [ vertex ];
		const result = [];
		const visited = {};
		let currentVertex;
		// mark the starting vertex as visited
		visited[vertex] = true;
		// loop as long as there is anything in the queue
		while (queue.length) {
			// remove the first vertex from the queue and push it into the array that stores nodes visited
			currentVertex = queue.shift();
			result.push(currentVertex);
			// loop over each vertex in the adjaceny list for the vertex you are visiting
			adjacencyList[currentVertex].forEach((neighbor) => {
				// if its not inside the object that stores nodes visited, mark it as visisted and enqueue that vertex
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}
		// once the loop finished looping, return the array of visited nodes
		return result;
	}
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

let undirectGraph = new Graph();
undirectGraph.addVertex('tokyo');
undirectGraph.addVertex('san francisco');
undirectGraph.addVertex('nagasaki');
undirectGraph.addVertex('bali');
undirectGraph.addVertex('sydney');
undirectGraph.addVertex('honolulu');
undirectGraph.addEdge('tokyo', 'nagasaki');
undirectGraph.addEdge('tokyo', 'honolulu');
undirectGraph.addEdge('nagasaki', 'bali');
undirectGraph.addEdge('sydney', 'bali');
undirectGraph.addEdge('honolulu', 'san francisco');
undirectGraph.addEdge('tokyo', 'san francisco');
undirectGraph;
