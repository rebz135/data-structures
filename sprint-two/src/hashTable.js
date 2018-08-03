

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let keyVal = {};
  
  keyVal[k] = v;
  let val = this._storage.get(index);
  if (val) { 
    _.extend(val, keyVal);
    this._storage.set(index, val);
  } else {
    this._storage.set(index, keyVal);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let obj = this._storage.get(index);
  delete obj[k];
  this._storage.set(index, obj);
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(1)
 remove: O(1)
 */