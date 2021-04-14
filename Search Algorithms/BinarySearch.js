// binary search only works on sorted data sets and is done by comparing the mid elemet in the data set
// with the value being searched for and if it the mid element is greater, the right part of the data set
// from the mid value is excluded in the next search, this goes on and on until the value is found or not

const binarySearch = (arr, elem) => {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

// the time complexity of binary search is O(log n) cause as the number (n) of data we want to search through varies,
// the operations that take place is increase or reduce by m where 2^m = n and can also be written as log n in base 2