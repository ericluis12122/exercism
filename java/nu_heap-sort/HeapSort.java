class HeapSort {

    /**
     * Rearranges the elements of the array to maintain the max-heap property.
     * @param arr the array to be heapified
     * @param n the size of the heap
     * @param i the index of the current node
     */
    public static void heapify(int[] arr, int n, int i) {
        // Assume the current node (i) is the largest
        int largest = i;
        // Calculate the indices of the left and right child nodes
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        // Check if the left child exists and is greater than the current largest
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        // Check if the right child exists and is greater than the current largest
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        // If the largest is not the current node, swap and recursively heapify
        if (largest != i) {
            // Swap the current node with the largest child
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            // Recursively heapify the affected subtree
            heapify(arr, n, largest);
        }
    }

    /**
     * Sorts an array of integers using the Heap Sort algorithm.
     * @param arr the array to be sorted
     */
    public static void heapSort(int[] arr) {
        int n = arr.length;

        // Build a max heap from the input array
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }

        // Extract elements from the heap one by one
        for (int i = n - 1; i > 0; i--) {
            // Move the current root (maximum element) to the end
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            // Heapify the reduced heap to maintain the max-heap property
            heapify(arr, i, 0);
        }
    }
}

