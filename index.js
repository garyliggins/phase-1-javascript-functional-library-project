function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}


function myMap(collection, callback) {
    let result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(callback(collection[key], key, collection));
            }
        }
    }

    return result;
}

// Example function calls:
console.log(myMap([1, 2, 3], function (num) {
    return num * 3;
}));
// => [3, 6, 9]

console.log(myMap({
    one: 1,
    two: 2,
    three: 3
}, function (num) {
    return num * 3;
}));
// => [3, 6, 9]

function myReduce(collection, callback, acc) {
    let keys = [];
    let isAccProvided = acc !== undefined;

    if (Array.isArray(collection)) {
        if (!isAccProvided) {
            acc = collection[0];
            for (let i = 1; i < collection.length; i++) {
                acc = callback(acc, collection[i], collection);
            }
        } else {
            for (let i = 0; i < collection.length; i++) {
                acc = callback(acc, collection[i], collection);
            }
        }
    } else if (typeof collection === 'object') {
        keys = Object.keys(collection);
        if (!isAccProvided) {
            acc = collection[keys[0]];
            for (let i = 1; i < keys.length; i++) {
                acc = callback(acc, collection[keys[i]], collection);
            }
        } else {
            for (let i = 0; i < keys.length; i++) {
                acc = callback(acc, collection[keys[i]], collection);
            }
        }
    }

    return acc;
}

// Example function calls:
console.log(myReduce([1, 2, 3], function (acc, val) {
    return acc + val;
}, 10));
// => 16

console.log(myReduce({
    one: 1,
    two: 2,
    three: 3
}, function (acc, val) {
    return acc + val;
}));
// => 6

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i];
            }
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key], key, collection)) {
                    return collection[key];
                }
            }
        }
    }
    return undefined;
}

// Example function calls:
console.log(myFind([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 === 0;
}));
// => 2

console.log(myFind({
    one: 1,
    three: 3,
    four: 4,
    six: 6
}, function (num) {
    return num % 2 === 0;
}));
// => 4

function myFilter(collection, predicate) {
    let result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                result.push(collection[i]);
            }
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key], key, collection)) {
                    result.push(collection[key]);
                }
            }
        }
    }

    return result;
}

// Example function calls:
console.log(myFilter([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 === 0;
}));
// => [2, 4, 6]

console.log(myFilter({
    one: 1,
    three: 3,
    five: 5
}, function (num) {
    return num % 2 === 0;
}));
// => []


function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else if (typeof collection === 'object') {
        return Object.keys(collection).length;
    }
    return 0;
}

// Example function calls:
console.log(mySize({
    one: 1,
    two: 2,
    three: 3
}));
// => 3

console.log(mySize([]));
// => 0

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

// Example function calls:
console.log(myFirst([5, 4, 3, 2, 1]));
// => 5

console.log(myFirst([5, 4, 3, 2, 1], 3));
// => [5, 4, 3]

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}

// Example function calls:
console.log(myLast([5, 4, 3, 2, 1]));
// => 1

console.log(myLast([5, 4, 3, 2, 1], 3));
// => [3, 2, 1]

function myKeys(object) {
    let keys = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  
  // Example function call:
  console.log(myKeys({ one: 1, two: 2, three: 3 }));
  // => ["one", "two", "three"]

  function myValues(object) {
    let values = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]);
      }
    }
    return values;
  }
  
  // Example function call:
  console.log(myValues({ one: 1, two: 2, three: 3 }));
  // => [1, 2, 3]
  
  