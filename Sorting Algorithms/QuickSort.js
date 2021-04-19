// quick sort is kinda less intuitive compared to the ones we have seen so far
// it has a similar process to merge sort but it is diferent though
// it works by picking an element in an array and finding the right index it is supposed to be if it is sorted
// so  basicall, it puts the ones lower than it before it and those greater than it after it
// it then takes the array right of the element abd the one left of it and does the same without copying the element
// it does all this to the original element, it does this recursively until the whole array is sorted
// we create the function that finds the right index of the number first

// the function takes the array, the start point in the array which defaults to zero and the end point of the array which defaulyts to the length of the array minus one
const pivot = (arr, start = 0, end = arr.length - 1) => {

  // we define the value at the index where we want to use as the number to find its right sorted index
  // in this function, we have chosen to use the first value of the array and our function is built around that  
  let pivot = arr[start];

  // now we create a swap point, the idea here is to increase this variable any time we encounter a number less than pivot
  let swapPoint = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapPoint++;
      
      // after increasing the swap point, we swap the element at i with the one at swap point so that at the end we will have all numbers less than pivot at the left of it
      [arr[swapPoint], arr[i]] = [arr[i], arr[swapPoint]]
    }
  }
  // eventually we swap pivot with the element at the final swap point
  [arr[start], arr[swapPoint]] = [arr[swapPoint], arr[start]]
  return swapPoint;
}

// now, we create the quik sort algorithm

const quikSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quikSort(arr, left, pivotIndex - 1);
    quikSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// the quick sort algorithm has a time complexity of O(n log n) on average but in nthe worst case sinereo when the array is sorted, its O(n^2)