// We will compare only objects
if (!Object.compare) {
  var match;
  match = 1;
  Object.compare = function(obj1, obj2) {
    Object.keys(obj1).forEach(function(key) {
      if (obj1[key] !== obj2[key]){
        match = 0;
      }
    });
    return match ? true:false;
  };
}

assert = function(value, expected) {
  if (!Object.compare(value, expected)) {
    print("*************************");
    print("********* ERROR *********");
    print("*************************");
    print("");
    print("Expected: ", expected);
    print("Got:      ", value);
    quit();
  }
}
