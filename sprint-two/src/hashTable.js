

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.totalElements = 0;
};

HashTable.prototype.insert = function(k, v) {
  this.totalElements++;
  if (this.totalElements > 0.75 * this._limit) {
    this.resizeDouble();
  }
  var index = getIndexBelowMaxForKey(k, this._limit); // 16 -> 12
  let bin = this._storage.get(index) || [];
  bin.push([k, v]);
  this._storage.set(index, bin);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit); // 16 -> 12
  let bin = this._storage.get(index) || [];
  let result = undefined;
  bin.forEach(function(ele) {
    if (ele[0] === k) {
      result = ele[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  this.totalElements--;
  if (this.totalElements < 0.25 * this._limit) {
    this.resizeHalf();
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bin = this._storage.get(index);
  let delIndex = -1;
  bin.forEach(function(ele, index) {
    if (ele[0] === k) {
      delIndex = index;
    }
  });
  bin.splice(delIndex, 1);
};

HashTable.prototype.resizeDouble = function() {
  let newTable = LimitedArray(this._limit * 2);
  for (let i = 0; i < this._limit; i++) {
    let oldBin = this._storage.get(i) || [];
    for (let keyVal of oldBin) {
      let newIndex = getIndexBelowMaxForKey(keyVal[0], this._limit * 2);
      let newBin = newTable.get(newIndex) || [];
      newBin.push(keyVal);
      newTable.set(newIndex, newBin);
    }
  }
  this._storage = newTable;
  this._limit *= 2;
};  

HashTable.prototype.resizeHalf = function() {
  let newTable = LimitedArray(this._limit / 2);
  for (let i = 0; i < this._limit; i++) {
    let oldBin = this._storage.get(i) || [];
    for (let keyVal of oldBin) {
      let newIndex = getIndexBelowMaxForKey(keyVal[0], this._limit / 2);
      let newBin = newTable.get(newIndex) || [];
      newBin.push(keyVal);
      newTable.set(newIndex, newBin);
    }
  }
  this._storage = newTable;
  this._limit /= 2;
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(1)
 remove: O(1)
 */