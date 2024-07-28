//merge sort is the divide and conquer algorithm that splits the array into smaller subarray , sorts those subarray and then merges them back toghether into sorted array.
//steps to merge sort 
//1 . Divide : split the array into two halves 
//2 . Conquer: Recursively sort each half 
//3 . Combine: Merge the two sorted halves into one sorted array.

public class MergeSort {
  // function to merge two subarrays of arr[]
  // first subarray is arr[l..m]
  // second subarray is arr[m+1..r]
  void merge(int arr[], int l, int m, int r) {
    // Sizes of two subarrays to be merged
    int n1 = m - l + 1;
    int n2 = r - m;

    // create temporary arrays
    int L[] = new int[n1];
    int R[] = new int[n2];

    // copy data to temporary arrays
    for (int i = 0; i < n1; ++i) {
      L[i] = arr[l + i];
    }
    for (int j = 0; j < n1; ++j) {
      L[j] = arr[m + 1 + j];
    }

    // Initial indexes of first and second subarrays
    int i = 0, j = 0;

    // Initial index of merged subarrays
    int k = l;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[i];
        j++;
      }
      k++;
    }

    // copy remaining elements of L[] , if any

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }

    // cop remaining elements of R[] , if any
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }

  }

  void sort(int arr[], int l, int r) {
    if (l < r) {
      // find the middle point
      int m = (l + r) / 2;

      // Sort first and second halves
      sort(arr, l, m);
      sort(arr, m + 1, r);

      // merge the sorted halves
      merge(arr, l, m, r);
    }
  }

  // Utility function to print the array
  static void printArray(int arr[]) {
    int n = arr.length;
    for (int i = 0; i < n; i++) {
      System.out.println(arr[i] + " ");
    }
    System.out.println();
  }

  // Driver method
  public static void main(String[] args) {
    int arr[] = { 12, 11, 13, 5, 6, 7 };

    System.out.println("Given Array");
    printArray(arr);

    MergeSort ob = new MergeSort();
    ob.sort(arr, 0, arr.length - 1);

    System.err.println("\nSorted Array");
    printArray(arr);
  }

}
