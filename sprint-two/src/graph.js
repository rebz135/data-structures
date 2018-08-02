

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  let obj = {};
  obj.edges = [];
  this.nodes[node] = obj;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodes[node]) {
    let nodeEdges = this.nodes[node].edges;
    for (let i = 0; i < nodeEdges.length; i++) {
      this.removeEdge(node, nodeEdges[i]);
    }
    delete this.nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // console.log(this.nodes[fromNode].edges + ' || ' + this.nodes[toNode].edges);
  return this.nodes[fromNode].edges.indexOf(toNode) >= 0;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges.push(toNode);
  this.nodes[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let delFromIndex = this.nodes[fromNode].edges.indexOf(toNode);
  let delToIndex = this.nodes[toNode].edges.indexOf(fromNode);
  this.nodes[fromNode].edges.splice(delFromIndex,1);
  this.nodes[toNode].edges.splice(delToIndex,1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(val, key) {
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 Graph: O(1)
 addNode: O(1)
 removeNode: O(n^2)
 hasEdge: O(n)
 addEdge: O(n)
 removeEdge: O(n)
 forEachNode: O(n)
 
 Note: if want to reduce time complexity, refactor with edges as object instead of array
 */