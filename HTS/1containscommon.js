//given 2 arrays, create a function that lets a
// user know (true/ false ) whether these two arrays contain any common
// items
/* for example :
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
should return false
_________
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
should return true */

// 2 parameters -- arrays - no size limit
// return true or false

//O(n^2) - nestedloop

/*
function containsCommonItems(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
containsCommonItems(arr1, arr2);*/
//0(a*b) this two arrays can have different sizes
//arrays ===> obj {
//a: true,
//b: true,
//c: true,
//x: true
//}
//array2[index] === obj.properties
//
function containsCommonItems2(arr1, arr2) {
  // Loop through the first array and create an object where properties === items in the array
  const map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // Loop through the second array and check if items in the second array exist on the created object.
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// Example arrays
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];

//console.log(containsCommonItems2(array1, array2)); // should return false

const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "x"];
//console.log(containsCommonItems2(array3, array4)); // should return true

//O(a + b)

// language specific
function containsCommonItems3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

// Example arrays

console.log(containsCommonItems3(array1, array2)); // should return false


console.log(containsCommonItems3(array3, array4)); // should return true
