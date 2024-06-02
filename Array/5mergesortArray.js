function mergeSortArrays(array1, array2) {
  const mergeArray = []; // Initialize an array to store the merged result

  let array1Items = array1[0]; // Initialize a pointer for array1
  let array2Items = array2[0]; // Initialize a pointer for array2
  let i = 1; // Initialize an index for array1
  let j = 1; // Initialize an index for array2

  // Check input
  if (array1.length === 0) {
    return array2; // If array1 is empty, return array2
  }
  if (array2.length === 0) {
    return array1; // If array2 is empty, return array1
  }

  // Loop until both arrays are exhausted
  while (array1Items !== undefined || array2Items !== undefined) {
    // Compare the current elements of array1 and array2
    // and push the smaller one into the mergeArray
    if (array2Items === undefined || array1Items < array2Items) {
      mergeArray.push(array1Items); // If array1 has the smaller element, push it into mergeArray
      array1Items = array1[i]; // Move to the next element in array1
      i++; // Increment the index for array1
    } else {
      mergeArray.push(array2Items); // If array2 has the smaller element, push it into mergeArray
      array2Items = array2[j]; // Move to the next element in array2
      j++; // Increment the index for array2
    }
  }

  return mergeArray; // Return the merged array
}

console.log(mergeSortArrays([0, 3, 4, 31], [4, 6, 30])); // Output: [0, 3, 4, 4, 6, 30, 31]
