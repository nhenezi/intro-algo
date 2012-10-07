// dependecies for this chapter
deps = [
  'helper.js'
];

load(deps);
// ******************************************
// ****** CHAPTER 2  - Getting started ******
// ******************************************

// ******************************************
// ****** CHAPTER 2.1 - Insertion sort ******
// ******************************************
sort = {};

// Collection of test cases for sorting
sort.testCases = [
  {
    input:[1],
    output:[1],
  },
  {
    input:[1,3],
    output:[1,3],
  },
  {
    input:[1,-1],
    output:[-1,1],
  },
  {
    input:[1,3,2],
    output:[1,2,3],
  },
  {
    input:[1,-1,-3],
    output:[-3,-1,1],
  },
  {
    input:[1,-1,-3, -2, 7],
    output:[-3,-2,-1,1,7],
  }
];

// validates sort (based on test cases)
sort.assert = function(func) {
  var i;
  for (i = 0; i < sort.testCases.length; i++) {
    assert(func(sort.testCases[i].input), sort.testCases[i].output);
  }
};


sort.insertion = function(array) {
  var i, j, tmp, key;
  for (i = 1; i < array.length; i++) {
    key = array[i];
    for (j = i-1; key < array[j]; j--) {
      tmp = array[j];
      array[j] = array[j+1];
      array[j+1] = tmp;
    }
  }
  
  return array;
};

sort.assert(sort.insertion);


// Excercise 2.1-2
sort.insertion_inc = function(array) {
  var i, j, tmp, key;
  for (i = 1; i < array.length; i++) {
    key = array[i];
    for (j = 0; j < i && array[j] < key; j++);
    for (j; j <= i; j++) {
      tmp = array[j];
      array[j] = key;
      key = tmp;
    }
  }

  return array;
};

sort.assert(sort.insertion_inc);
