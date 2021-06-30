// were going to use an adjacency list for our graphs section
// and an undirected graph

class Node {
	constructor (val) {
		this.val = val;
	}
}

class Graph {
	constructor () {
		this.adjacencyList = {};
	}
	// adding a vertex/node
	// write a method called addVertex which accepts a name of a vertex
	// it should add a key to the adjaceny list with the name of the vertex and set it's value to be an empty arrray
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
		let filteredV1 = this.adjacencyList[vertex1].filter((vert) => vert !== vertex2);
		this.adjacencyList[vertex1] = filteredV1;
		let filteredV2 = this.adjacencyList[vertex2].filter((vert) => vert !== vertex1);
		this.adjacencyList[vertex2] = filteredV2;
	}
}

let undirectGraph = new Graph();
undirectGraph.addVertex('tokyo');
undirectGraph.addVertex('san francisco');
undirectGraph.addVertex('nagasaki');
undirectGraph.addEdge('tokyo', 'nagasaki');
undirectGraph;
undirectGraph.removeEdge('tokyo', 'nagasaki');
undirectGraph;
