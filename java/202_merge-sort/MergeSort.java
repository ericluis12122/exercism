class MergeSort {

    /**
     * Public method to start the merge sort process. It initializes the recursive sorting.
     * @param arr the array to be sorted
     */
    public static void mergeSort(int[] arr){
        // Call the recursive mergeSort method with initial indices (0 and arr.length - 1)
        mergeSort(arr, 0, arr.length - 1);
    }

    /**
     * Merges two subarrays into a single sorted array.
     * @param arr the array containing the subarrays
     * @param left the starting index of the left subarray
     * @param mid the ending index of the left subarray and the middle point
     * @param right the ending index of the right subarray
     */
    public static void merge(int[] arr, int left, int mid, int right) {
        // Calculate the lengths of the two subarrays
        int n1 = mid - left + 1;
        int n2 = right - mid;

        // Create temporary arrays to hold the subarrays
        int[] leftArr = new int[n1];
        int[] rightArr = new int[n2];

        // Copy data into the temporary left and right subarrays
        for (int i = 0; i < n1; i++) {
            leftArr[i] = arr[left + i];
        }
        for (int j = 0; j < n2; j++) {
            rightArr[j] = arr[mid + 1 + j];
        }

        // Merge the temporary arrays back into the original array
        int i = 0, j = 0, k = left;
        // Compare elements from both subarrays and put the smaller one into the original array
        while (i < n1 && j < n2) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k++] = leftArr[i++];
            } else {
                arr[k++] = rightArr[j++];
            }
        }

        // If any elements are left in the left subarray, copy them
        while (i < n1) {
            arr[k++] = leftArr[i++];
        }

        // If any elements are left in the right subarray, copy them
        while (j < n2) {
            arr[k++] = rightArr[j++];
        }
    }

    /**
     * Recursive method that divides the array into subarrays and calls merge to combine them.
     * @param arr the array to be sorted
     * @param left the starting index of the current subarray
     * @param right the ending index of the current subarray
     */
    public static void mergeSort(int[] arr, int left, int right) {
        // Base condition: if the subarray has more than one element, divide it
        if (left < right) {
            // Find the middle index
            int mid = left + (right - left) / 2;

            // Recursively sort the left half
            mergeSort(arr, left, mid);

            // Recursively sort the right half
            mergeSort(arr, mid + 1, right);

            // Merge the two sorted halves
            merge(arr, left, mid, right);
        }
    }
}
