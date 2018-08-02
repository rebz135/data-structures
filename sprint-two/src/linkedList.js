var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = Node(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
    }
    list.tail.next = node;
    list.tail = node;
  };

  list.removeHead = function() {
    if (list.head === list.tail) {
      list.tail = null;
    }
    if (list.head) {
      list.head = list.head.next;
      return list.head.value;
    }
  };

  list.contains = function(target) {
    let currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    };
    return false;  
  };  
  
  return list;
}


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 Linkedlist: O(1)
 addToTail: O(1)
 removeHead: O(1)
 contains: O(n)
 Node: O(1)
 */
