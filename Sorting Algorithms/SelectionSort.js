// selection sort is kinda similar to buble sort, it involves checking for the lowest item in the array
// and setting it to the beggining, but unlike bubble sort it doesnt swap as it goes, it just stores the minimun
// and updates it when there is a new minimum 

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (i !== min) {
      [arr[min], arr[i]] = [arr[i], arr[min]]
    }
  }
  return arr
}

// selection sort is prefered over bubble sort when we dont want a lot of swaps
// but generally, bubble sort is better
// the time complexity of selection sort is O(n^2)