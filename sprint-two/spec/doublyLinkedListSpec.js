describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });
  
  it('head and tail should be the same if only one node is added', function() {
    doublyLinkedList.addToTail(5000000);
    expect(doublyLinkedList.head === doublyLinkedList.tail).to.equal(true);
  });
  
  it('tail should point back to previous node', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.previous).to.equal(doublyLinkedList.head);
  });
  
  it('addToHead should add node to head of list', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToHead(6);
    expect(doublyLinkedList.head.value).to.equal(6);
  });
  
  it('previous variable of second to head node should re-reference to new head', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToHead(6);
    expect(doublyLinkedList.head.next.previous.value).to.equal(6);
  });
  
  it('if head is removed, new head previous value should be null', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.previous).to.equal(null);
  });
  
  it('if tail is removed, new tail next value should be null', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.next).to.equal(null);
  });
  
  it('Should work on 100,000 values', function() {
    for (let i = 0; i < 100000; i++) {
      doublyLinkedList.addToTail(i);
    }
    
    expect(doublyLinkedList.contains(0)).to.equal(true);
    expect(doublyLinkedList.contains(99999)).to.equal(true);
    expect(doublyLinkedList.contains(100000)).to.equal(false);

  });

});
