public class ProductOfArrayExceptSelf {
    public int[] productExceptSelf(int[] nums) {
        // Get the length of the input array
        int n = nums.length;
        
        // Create an array to hold the result
        int[] result = new int[n];

        // First pass: Calculate prefix products
        // Initialize the first element of result to 1, because there are no elements to the left of the first element
        result[0] = 1;
        
        // Loop through the array starting from the second element
        for (int i = 1; i < n; i++) {
            // The current element of result is the product of all elements before it
            // which is the previous element in result multiplied by the previous element in nums
            result[i] = result[i - 1] * nums[i - 1];
        }

        // Second pass: Calculate suffix products and multiply with prefix products
        // Initialize a variable to hold the suffix product, starting with 1 because there are no elements to the right of the last element
        int suffixProduct = 1;
        
        // Loop through the array backwards, starting from the last element
        for (int i = n - 1; i >= 0; i--) {
            // Multiply the current element of result (which contains the prefix product)
            // by the suffix product
            result[i] *= suffixProduct;
            
            // Update the suffix product by multiplying it with the current element in nums
            suffixProduct *= nums[i];
        }

        // Return the result array, which now contains the product of all elements except for the current element for each index
        return result;
    }

    public static void main(String[] args) {
        ProductOfArrayExceptSelf solution = new ProductOfArrayExceptSelf();
        int[] nums1 = {1, 2, 3, 4};
        int[] nums2 = {-1, 1, 0, -3, 3};
        
        int[] result1 = solution.productExceptSelf(nums1);
        int[] result2 = solution.productExceptSelf(nums2);
        
        // Printing the results
        System.out.println(java.util.Arrays.toString(result1)); // Output: [24, 12, 8, 6]
        System.out.println(java.util.Arrays.toString(result2)); // Output: [0, 0, 9, 0, 0]
    }
}

