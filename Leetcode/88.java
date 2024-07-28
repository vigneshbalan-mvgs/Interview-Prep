class Solution {
  public void merge(int[] nums1, int m, int[] nums2, int n) {
    // Start from the end of nums1 and nums2
    int last = m + n - 1;

    // Indexes of the last elements in the valid part of nums1 and nums2
    m -= 1;
    n -= 1;

    // Merge nums1 and nums2 from the end
    while (m >= 0 && n >= 0) {
      if (nums1[m] > nums2[n]) {
        nums1[last] = nums1[m];
        m -= 1;
      } else {
        nums1[last] = nums2[n];
        n -= 1;
      }
      last -= 1;
    }

    // If there are remaining elements in nums2, copy them
    while (n >= 0) {
      nums1[last] = nums2[n];
      n -= 1;
      last -= 1;
    }
  }

  public static void main(String[] args) {
    Solution solution = new Solution();

    int[] nums1 = { 1, 2, 3, 0, 0, 0 }; // nums1 has extra space for nums2
    int m = 3; // Number of valid elements in nums1
    int[] nums2 = { 2, 5, 6 };
    int n = 3; // Number of elements in nums2

    solution.merge(nums1, m, nums2, n);

    System.out.println("Merged Array: ");
    for (int num : nums1) {
      System.out.print(num + " ");
    }
  }
}
