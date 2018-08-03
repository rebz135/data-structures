

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.totalElements = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.totalElements++;
  //double in size when totalElements = 75% of limit
  this.resize();
  let bin = this._storage.get(index) || [];
  bin.push([k,v])
  this._storage.set(index, bin);
  this.totalElements++;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bin = this._storage.get(index) || [];
  let result = undefined;
  bin.forEach(function(ele){
    if (ele[0] === k) {
      result = ele[1];
    }
    });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.totalElements--;
  //half when totalElements = 25% of limit

  let bin = this._storage.get(index);
  let delIndex = -1;
  bin.forEach(function(ele, index){
    if (ele[0] === k) {
      delIndex = index;
    }
  })
  bin.splice(delIndex,1);
};

HashTable.prototype.resize =  function() {
  if (this.totalElements > 0.75 * this._limit) {
    let newStorage = LimitedArray(this._limit * 2);
    for (var i = 0; i<this._limit; i++) {
      let bin = this._storage.get(i) || [];
      bin.forEach(function(ele, index){
        var index = getIndexBelowMaxForKey(ele[0], this._limit * 2)
        newStorage.set(index, [ele[0], ele[1]])
      });
    }
    console.log(this._limit);
    this._storage = newStorage;
    this._limit = this._limit * 2;
    console.log(this._limit);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(1)
 remove: O(1)
 */