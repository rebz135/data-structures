var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
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




/*
 * Complexity: What is the time complexity of the above functions?
 Tree: O(1);
 addChild: O(1);
 contains: O(n);
 */
