

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.totalElements = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.totalElements++;
  this.resize();
  let bin = this._storage.get(index) || [];
  bin.push([k,v])
  this._storage.set(index, bin);
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
    let newTable = LimitedArray(this._limit * 2);
    for (let i=0; i<this._limit; i++) {
      let currentBin = this._storage.get(i);
      debugger;
      
    }
  }
  //if ht num elements is greater than 0.75 * limit
    //instantiate new table with storage with limited array with double-size
    //loop through ht storage using i
      //set currentBin to ht get at i
      //loop through currentBin
        //re-hash index with new size
        //make sure newTable Bin does or doesn't exist
        //create/push the keyVal pair to newBin
        //set newTable bin at index, with value newBin
      //
    // set ht storage to new table.
    // set original limit to be double.

}  
  
  
  
  
  
  
  
  
  
  
  
  
  // let oldLimit = this._limit;
  // let numElements = this.totalElements;
  // if(numElements > Math.ceil((0.75 * oldLimit))){
  //   let newTable = new HashTable(oldLimit * 2);
  //   this._limit = newTable._limit;
  //   for(var i = 0; i < oldLimit; i++) {
  //     let oldBin = this._storage.get(i) || [];
  //     oldBin.forEach(keyVal => {
  //       newTable.insert(keyVal[0], keyVal[1])
  //     })
  //   }
  //   // this._storage = newTable._storage;
  //     this._storage = this._resizeStorage;
  //     this._resizeStorage = null;
  //     this._resizeStorage = LimitedArray(this._limit *2);
  // }
  
  // } else if (numElements < Math.ceil((0.25 * oldLimit))) {
  //   newTable._limit = oldLimit * 0.5;
  //   // newTable.insert(/*all old table values*/);
  //   this._storage = newTable._storage;
  // }
  
  // let oldLimit = this._limit;
  // if (this.totalElements > (0.75 * oldLimit)) {
  //   let newStorage = LimitedArray(oldLimit * 2);
  //   for (var i = 0; i<oldLimit; i++) {
  //     let oldBin = this._storage.get(i) || [];
  //     oldBin.forEach(function(ele){
  //       var newIndex = getIndexBelowMaxForKey(ele[0], oldLimit * 2)
  //       let newBin = newStorage.get(newIndex) || [];
  //       newBin.push([ele[0], ele[1]]);
  //       newStorage.set(newIndex, newBin);
  //     });
  //   }
  //   this._storage = newStorage;
  //   this._limit = oldLimit * 2;
  // }
/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(1)
 remove: O(1)
 */