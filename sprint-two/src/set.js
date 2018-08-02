var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = 1;
};

setPrototype.contains = function(item) {
  if (this._storage[item]) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 Set.add: O(1)
 Set.contains: O(1)
 Set.remove: O(1)

 */
