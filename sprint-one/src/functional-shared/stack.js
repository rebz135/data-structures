var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.count = 0;
  stack.storage = {};
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {
  size: function (){
    if (this.count <0) {
      return 0;
    } else {
      return this.count;
    }
  },
  push: function (item){
    this.storage[this.count] = item;
    this.count++;
  },

  pop: function() {
    this.count --;
    return this.storage[this.count];
  }

};