// the bubble sort is a way of sorting values of an iterative data structure which involves
// looping through the data and checking for the largerst and putting it to the end
// basically, we keep putting the greater value at the end of the unsorted part of the data we have it sorted


const bubbleSort = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    let noSwap = true;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false
      }
    }
    if (noSwap) return arr;
  }
  return arr;
}

// the time complexity of this algorithm is O(n^2)