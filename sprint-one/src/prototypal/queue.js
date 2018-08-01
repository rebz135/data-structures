var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.count = 0;
  queue.keys = [];
  return queue;
};

var queueMethods = {
  enqueue: function(item){
    this.storage[this.count] = item;
    this.keys.push(this.count);
    this.count ++;
  },
  dequeue: function(){
    let temp = this.storage[Math.min(...this.keys)];
    delete this.storage[Math.min(...this.keys)];
    this.keys = this.keys.slice(1);
    return temp;
  },
  size: function(){
    return this.keys.length;
  },
};


