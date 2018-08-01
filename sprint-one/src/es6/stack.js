class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(count, storage) {
    this.count = 0;
    this.storage = {};
  }

  size (){
    if (this.count <0) {
      return 0;
    } else {
      return this.count;
    }
  }
  
  push (item){
    this.storage[this.count] = item;
    this.count++;
  }

  pop() {
    this.count --;
    return this.storage[this.count];
  }

}