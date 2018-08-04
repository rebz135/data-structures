var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = Node(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } 
    node.previous = list.tail;
    list.tail.next = node;
    list.tail = node;
  };

  list.removeHead = function() {
    let val = list.head.value;
    if (list.head === list.tail) {
      list.tail = null;
      list.head = null;
    }
    if (list.head) {
      list.head = list.head.next;
      list.head.previous = null;
    }
    return val;
  };
  
  list.addToHead = function(value) {
    let node = Node(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } 
    node.next = list.head;
    list.head.previous = node;
    list.head = node;
  };
  
  list.removeTail = function() {
    let val = list.tail.value;
    if (list.head === list.tail) {
      list.tail = null;
      list.head = null;
    }
    if (list.tail) {
      list.tail = list.tail.previous;
      list.tail.next = null;
    }
    return val;
  }; 

  list.contains = function(target) {
    let currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;  
  };
  
  
  return list;
  console.log('hello');
};

var Node = function(value) {
  var node = {};
  
  node.value = value;
  node.previous = null;
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
