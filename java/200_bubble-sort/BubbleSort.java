class BubbleSort {

    /**
     * Sorts an array of integers using the Bubble Sort algorithm.
     * @param arr the array to be sorted
     */
    static void bubbleSort(int[] arr) {
        // Calculate the last index of the array for convenience
        int len = arr.length - 1;

        // Outer loop: Each pass ensures the largest unsorted element is placed correctly
        for (int i = 0; i < len; i++) {
            // Flag to track if any swaps were made during this pass
            boolean swapped = false;

            // Inner loop: Compare adjacent elements and swap if necessary
            for (int j = 0; j < len - i; j++) {
                // If the current element is greater than the next element, swap them
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                    // Mark that a swap occurred
                    swapped = true;
                }
            }

            // If no swaps were made during this pass, the array is already sorted
            if (!swapped) {
                break; // Exit the loop early to save unnecessary iterations
            }
        }
    }
}
