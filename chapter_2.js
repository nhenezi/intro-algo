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
var sort = {};

// Collection of test cases for sorting
sort.testCases = [
  {
    input:[1],
    output:[1],
  },
  {
    input:[3,1],
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
sort.assert = function(func, desc) {
  var i, testCases;
  testCases = Object.clone(sort.testCases);
  for (i = 0; i < testCases.length; i++) {
    assert(func(testCases[i].input), testCases[i].output, desc);
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

sort.assert(sort.insertion, "Insertion sort (decrementing)");


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

sort.assert(sort.insertion_inc, "Insertion sort (incrementing)");


// 2.1-3
var linear_search = function(array, value) {
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return null;
};

assert(linear_search([1,2,3,4,5,6,7], 3), 2);
assert(linear_search([1,5,7,-11,23,64], -11), 3);
assert(linear_search([], 22), null);
assert(linear_search([999, 256, 132], 999), 0);

// ************************************************
// ****** CHAPTER 2.2 - Analyzing algorithms ******
// ************************************************

// 2.2-2

sort.selection = function(array) {
  var i, j, smallest, tmp;
  for (i = 0; i < array.length; i++) {
    smallest = i;
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }
    tmp = array[i];
    array[i] = array[smallest];
    array[smallest] = tmp;
  }

  return array;
};

sort.assert(sort.selection, "Selection sort");

// ************************************************
// ****** CHAPTER 2.2 - Designing algorithms ******
// ************************************************

// 2.3.1 * The devide-and-conquer approach

// merge two arrays
var merge = function(a, b) {
  var i, j, c;
  c = [];
  i = j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      c.push(a[i]);
      i++;
    }
    else {
      c.push(b[j]);
      j++;
    }
  };

  for (i; i < a.length; i++) {
    c.push(a[i]);
  }
  for (j; j < b.length; j++) {
    c.push(b[j]);
  }

  return c;
};

assert(merge([1,2],[1,2]), [1,1,2,2,]);
assert(merge([],[]), []);
assert(merge([1,2],[]), [1,2]);
assert(merge([], [1,2]), [1,2]);

sort.merge = function(array) {
  if (array.length === 1)
    return array;
  return merge(sort.merge(array.slice(0, Math.floor(array.length/2))),
        sort.merge(array.slice(Math.floor(array.length/2))));
};

sort.assert(sort.merge, "Merge sort");

// 2-2

sort.bubble = function(array) {
  var i, j, tmp;
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; array.length; i++) {
      if (array[i] > array[j]) {
        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    }
  }
}

sort.assert(sort.bubble, "Bubble sort");
