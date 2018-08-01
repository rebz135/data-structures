class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, count, keys) {
    this.storage = {};
    this.count = 0;
    this.keys = [];
  }

  enqueue (item){
    this.storage[this.count] = item;
    this.keys.push(this.count);
    this.count ++;
  }

  dequeue (){
    let temp = this.storage[Math.min(...this.keys)];
    delete this.storage[Math.min(...this.keys)];
    this.keys = this.keys.slice(1);
    return temp;
  }

  size (){
    return this.keys.length;
  }

}
