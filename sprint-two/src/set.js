var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  let key = JSON.stringify(item);
  this._storage[key] = 1;
};

setPrototype.contains = function(item) {
  let key = JSON.stringify(item);
  if (this._storage[key]) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  let key = JSON.stringify(item);
  delete this._storage[key];
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 Set.add: O(1)
 Set.contains: O(1)
 Set.remove: O(1)

 */
