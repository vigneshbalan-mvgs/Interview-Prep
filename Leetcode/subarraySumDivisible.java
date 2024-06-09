import java.util.HashMap;
import java.util.Map;

public class SubarraySumDivisibleByK {
    public int subarraysDivByK(int[] nums, int k) {
        // Create a hashmap to store the frequency of remainders
        Map<Integer, Integer> remainderCount = new HashMap<>();
        // Initialize the hashmap with remainder 0 and frequency 1
        remainderCount.put(0, 1);
        
        int cumulativeSum = 0; // This will store the cumulative sum of elements
        int count = 0; // This will store the count of subarrays with sum divisible by k
        
        // Iterate through the array
        for (int i = 0; i < nums.length; i++) {
            cumulativeSum += nums[i]; // Update the cumulative sum
            
            // Calculate the remainder of the cumulative sum divided by k
            int remainder = cumulativeSum % k;
            // Adjust negative remainder to be positive
            if (remainder < 0) {
                remainder += k;
            }
            
            // If the remainder is already in the hashmap, add the count of this remainder to the result
            if (remainderCount.containsKey(remainder)) {
                count += remainderCount.get(remainder);
            }
            
            // Update the hashmap with the current remainder
            remainderCount.put(remainder, remainderCount.getOrDefault(remainder, 0) + 1);
        }
        
        return count; // Return the total count of subarrays
    }
    
    public static void main(String[] args) {
        SubarraySumDivisibleByK solution = new SubarraySumDivisibleByK();
        int[] nums1 = {4, 5, 0, -2, -3, 1};
        int k1 = 5;
        System.out.println(solution.subarraysDivByK(nums1, k1)); // Output: 7

        int[] nums2 = {5};
        int k2 = 9;
        System.out.println(solution.subarraysDivByK(nums2, k2)); // Output: 0
    }
}

