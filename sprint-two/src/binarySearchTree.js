var BinarySearchTree = function(value) {
  let BST = {};
  BST.value = value;
  BST.left = null;
  BST.right = null;
  _.extend(BST, BSTMethods);
  return BST;
};

var BSTMethods = {
  insert: function(val) {
    let newTree = BinarySearchTree(val);
    if (val < this.value) {
      if (this.left) {
        this.left.insert(val);
      } else {
        this.left = newTree;
      }
    } else {
      if (this.right) {
        this.right.insert(val);
      } else {
        this.right = newTree;
      }
    }
  },
  contains: function(val) {
    if (this.value === val) {
      return true;
    } else if (val < this.value) {
      if (this.left) {
        return this.left.contains(val);
      }
    } else {
      if (this.right) {
        return this.right.contains(val);
      }
    }
    return false;
  },
  depthFirstLog: function(func) {
    func(this.value);
    if (this.left) {
      this.left.depthFirstLog(func);
    }
    if (this.right) {
      this.right.depthFirstLog(func);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(n)
 contains: O(n)
 depthFirstLog: O(n)
 */
