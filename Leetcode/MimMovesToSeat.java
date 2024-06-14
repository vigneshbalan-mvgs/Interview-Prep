public class MinMovesToSeat {
    
    // Function to perform bubble sort on an array
    private void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;
        
        do {
            swapped = false;
            for (int i = 1; i < n; i++) {
                if (arr[i - 1] > arr[i]) {
                    // Swap arr[i - 1] and arr[i]
                    int temp = arr[i - 1];
                    arr[i - 1] = arr[i];
                    arr[i] = temp;
                    swapped = true;
                }
            }
            n--; // Reduce the size of the unsorted portion
        } while (swapped);
    }
    
    // Function to calculate minimum moves to seat students
    public int minMovesToSeat(int[] seats, int[] students) {
        // Sort both seats and students arrays using bubble sort
        bubbleSort(seats);
        bubbleSort(students);
        
        int totalMoves = 0;
        
        // Calculate the total moves required
        for (int i = 0; i < seats.length; i++) {
            totalMoves += Math.abs(students[i] - seats[i]);
        }
        
        return totalMoves;
    }
    
    public static void main(String[] args) {
        // Example usage
        int[] seats = {3, 1, 5};
        int[] students = {2, 7, 5};
        
        MinMovesToSeat solution = new MinMovesToSeat();
        int minMoves = solution.minMovesToSeat(seats, students);
        System.out.println("Minimum moves required: " + minMoves); // Output: 5
    }
}

