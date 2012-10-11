// compares two objects 
// two objects are equal if all enumerable
// properties are equal
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

assert = function(value, expected, description) {
  var error = 0;
  description = description || "";
  if ((typeof value) === "object" && value !== null) {
    if (!Object.compare(value, expected)) {
      error = 1;
    }
  }
  else if (value !== expected) {
    error = 1;
  }
  if (error) {
    print("*************************");
    print("********* ERROR *********");
    print("*************************");
    print("*" + description);
    print("Expected: ", expected);
    print("Got:      ", value);
  }
}

// pretty print :)
var pprint = function(obj, indent, key) {
  var notation;
  indent = indent || "";
  key = key || "";
  if (obj === null || typeof obj !== "object") {
    print(indent, key, ": ", obj);
  }
  else {
    notation = (obj instanceof Array) ? ["[","]"] : ["{","}"];
    print(indent + notation[0]);
    Object.keys(obj).forEach(function(key) {
      pprint(obj[key], indent + "  ", key);
    });
    print(indent + notation[1]);
  };
};

// clones all enumerable properties
if (!Object.clone) {
  Object.clone = function(obj) {
    var clone, that;
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    else {
      clone = (obj instanceof Array) ? []:{};
      Object.keys(obj).forEach(function(key) {
        clone[key] = Object.clone(obj[key]);
      });
      return clone;
    }
  };
}


pprint(os);