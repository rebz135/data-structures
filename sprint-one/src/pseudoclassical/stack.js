var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Stack.prototype.size = function (){
    if (this.count <0) {
      return 0;
    } else {
      return this.count;
    }
  };
  Stack.prototype.push = function (item){
    this.storage[this.count] = item;
    this.count++;
  };
  Stack.prototype.pop = function() {
    this.count --;
    return this.storage[this.count];
  }