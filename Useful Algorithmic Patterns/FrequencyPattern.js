// an algorithm that takes two arrays as input and returns true 
// if the items in the second array contains the square of the 
// numbers in the first array in the right frequency
// for example, [1,2,3] and [4,1,9] should return true
// [1,2,3] and [1,9] should return false and 
// [1,2,1] and [4,4,1] should return false (must be same frequency)

const isSquareOf = (firstArray, secondArray) => {
  // first check if both arrays are the same length
  if(firstArray.length !== secondArray.length) {
    return false;
  };
  // initialize frequency counters
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // then count the frequency of the numbers in the arrays 
  // and update their corresponding frequency counters (the objets above)
  for(let val of firstArray) {
    frequencyCounter1[val] = frequencyCounter1[val]++ || 1;
  };
  for(let val of secondArray) {
    frequencyCounter2[val] = frequencyCounter2[val]++ || 1;
  };

  // check if the square of the keys in fthe first array exists as keys in the second array
  // and check if the frequencies are the same for an item and its square pair
  for(let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false;
    };
    if(!(frequencyCounter2[key ** 2] == frequencyCounter1[key])) {
      return false;
    };
  };

  return true
};
