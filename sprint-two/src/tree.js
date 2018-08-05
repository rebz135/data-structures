var Tree = function(value) {
  
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = Tree(value);
  child.parent = this;
  this.children.push(child); 
};

treeMethods.removeChild = function(target) {
  let newChildren = [];
  this.children.forEach(function(tree, index) {
    if (!tree.value === target) {
      newChildren.push(index);
    }
  });
  this.children = newChildren;
};

treeMethods.removeFromParent = function() {
  let parentVar = this.parent;
  parentVar.children = _.reduce(parentVar.children, (acc, child) => {
    if (!(this === child)) {
      return acc.push(child);
    }
    return acc;
  }, []);
  this.parent = null;
};

treeMethods.contains = function(target) {
  let result = false;
  let checker = function(tree) {
    if (tree.value === target) {
      result = true;
      return result;
    }
    if (tree.children.length > 0) {
      tree.children.forEach(function(elem) {
        if (!result) {
          checker(elem);
        }
      });
    }
    return result;
  }; 
  return checker(this);
};

treeMethods.traverse = function(callback) {
  let value = this.value;
  let checker = function(tree) {
    if (tree.children.length > 0) {
      tree.children.forEach(function(elem) {
        checker(elem);
      });
    }
    callback(tree.value);
  }; 
  checker(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 Tree: O(1);
 addChild: O(1);
 contains: O(n);
 */
