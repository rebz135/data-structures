var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var keys = [];

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    keys.push(count);
    count ++;
  };

  someInstance.dequeue = function() {
    let temp = storage[Math.min(...keys)];
    console.log(storage[Math.min(...keys)]);
    delete storage[Math.min(...keys)];
    keys = keys.slice(1);
    return temp;
  };

  someInstance.size = function() {
    return keys.length;
  };

  return someInstance;
};
