var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
    return storage[count-1];
  };

  someInstance.pop = function() {
    count --;
    return storage[count]
  };

  someInstance.size = function() {
    if (count <0) {
      return 0;
    } else {
      return count;
    }
  };

  return someInstance;
};
