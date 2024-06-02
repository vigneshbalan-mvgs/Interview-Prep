/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxGlobal = nums[0]; let maxCurrent = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], nums[i] + maxCurrent)
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal;
};


my solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // nums is a array of Intergers
  // i have to return max sum of the total array of items 
  // create a two interger that contain the currentsum and max sum
  // and using for loop add everynumber to the sum 
  // Initialize variables to store the maximum sum
  let maxSum = nums[0]; // Initialize maxSum with the first element of the array
  let currentSum = nums[0]; // Initialize currentSum with the first element of the array

  // Iterate through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // Update currentSum by taking the maximum of nums[i] and currentSum + nums[i]
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update maxSum to the maximum of maxSum and currentSum
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};
