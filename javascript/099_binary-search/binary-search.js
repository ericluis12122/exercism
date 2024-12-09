export const find = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] == target)
      return mid;
    if(arr[mid] < target)
      left = mid + 1;
    else
      right = mid - 1;
  }
  throw new Error('Value not in array');
};
