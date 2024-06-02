/**
 * Find indices of two numbers in 'arr' that add up to 'target'.
 * @param {number[]} arr - Array of integers
 * @param {number} target - Target sum
 * @return {number[]} - Indices of the two numbers
 */
const twoSum = function (arr, target) {
  const nums = {}; // Initialize an empty object to store indices

  // Iterate through each element in 'arr'
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i]; // Calculate the complement

    // Check if complement exists in 'nums'
    if (complement in nums) {
      // If complement exists, return the indices of the two numbers
      return [nums[complement], i];
    }

    // Store the index of the current element in 'nums'
    nums[arr[i]] = i;
  }

  // If no pair of elements adds up to 'target', return [-1, -1]
  return [-1, -1];
};

//other way to do it is just using nested loops
//
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
