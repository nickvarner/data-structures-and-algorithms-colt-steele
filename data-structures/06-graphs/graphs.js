// were going to use an adjacency list for our graphs section
// and an undirected graph

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
	DFS (vertex) {
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
