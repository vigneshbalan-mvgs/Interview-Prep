function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n);

  // First pass: Calculate prefix products
  result[0] = 1; // No elements to the left of the first element
  for (let i = 1; i < n; i++) {
    // The current element of result is the product of all elements before it
    // which is the previous element in result multiplied by the previous element in nums
    result[i] = result[i - 1] * nums[i - 1];
  }

  // Second pass: Calculate suffix products and multiply with prefix products
  let suffixProduct = 1; // No elements to the right of the last element
  for (let i = n - 1; i >= 0; i--) {
    // Multiply the current element of result (which contains the prefix product)
    // by the suffix product
    result[i] *= suffixProduct;

    // Update the suffix product by multiplying it with the current element in nums
    suffixProduct *= nums[i];
  }

  // Return the result array, which now contains the product of all elements except for the current element for each index
  return result;
}

// Test cases
const nums1 = [1, 2, 3, 4];
const nums2 = [-1, 1, 0, -3, 3];

console.log(productExceptSelf(nums1)); // Output: [24, 12, 8, 6]
console.log(productExceptSelf(nums2)); // Output: [0, 0, 9, 0, 0]
