class QuickSort {

    /**
     * Public method to initiate the quicksort algorithm.
     * It calls the private quickSort method with the initial low and high indices.
     * @param arr the array to be sorted
     */
    public static void quickSort(int[] arr){
        // Calls the private quickSort method with initial low and high indices
        quickSort(arr, 0, arr.length - 1);
    }

    /**
     * Private recursive method that sorts the array by dividing it into smaller subarrays.
     * @param arr the array to be sorted
     * @param low the starting index of the subarray
     * @param high the ending index of the subarray
     */
    public static void quickSort(int[] arr, int low, int high){
        // Base condition: if the subarray has more than one element
        if (low < high) {
            // Partition the array and get the pivot index
            int pivotIndex = partition(arr, low, high);

            // Recursively sort the subarrays to the left and right of the pivot
            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
    }

    /**
     * Partitions the array into two subarrays based on the pivot.
     * Elements smaller than the pivot are moved to the left, and elements larger than the pivot are moved to the right.
     * @param arr the array to be partitioned
     * @param low the starting index of the subarray
     * @param high the ending index of the subarray
     * @return the index of the pivot element
     */
    public static int partition(int[] arr, int low, int high){
        // Select the pivot element (in this case, the last element of the array)
        int pivot = arr[high];
        int i = low - 1;

        // Traverse through the array and rearrange elements based on the pivot
        for (int j = low; j < high; j++) {
            // If the current element is smaller or equal to the pivot, swap it with the element at index i
            if (arr[j] <= pivot) {
                i++;
                swap(arr, i, j);
            }
        }

        // Swap the pivot element to its correct position in the array
        swap(arr, i + 1, high);

        // Return the index of the pivot element after partitioning
        return i + 1;
    }

    /**
     * Swaps two elements in the array.
     * @param arr the array where the elements will be swapped
     * @param i the index of the first element
     * @param j the index of the second element
     */
    public static void swap(int [] arr, int i, int j){
        // Temporary variable to hold the value of arr[i] during the swap
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
