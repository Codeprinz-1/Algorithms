// an algorithm that takes two arrays as input and returns true 
// if the items in the second array contains the square of the 
// numbers in the first array in the right frequency
// for example, [1,2,3] and [4,1,9] should return true
// [1,2,3] and [1,9] should return false and 
// [1,2,1] and [4,4,1] should return false (must be same frequency)
// we're assuming only two arrays containing numbers only are passed

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

// this function is very efficient in time complexity 
// although there is a shorter way of writing this
// but the emphasis here is on time complexity, 
// the first solution that might come to mind depending on who you are,
// might be a nested loop and its actually shorter but it has a time complexity of O(n ^ d)
// where d is the level of dept of the nested loops, that algorith would be an expensive one
// but by using frequency counters we have a more efficient time complexity of O(n)


// here is another function based on the same frequency pattern

const validAnagram = (firstString, secondString) => {
  if(firstString.length !== secondString.length) return false;

  let stringFrequency1 = {};
  let stringFrequency2 = {};

  for(let str of firstString) {
    stringFrequency1[str] = stringFrequency1[str]++ || 1;
  };

  for(let str of secondString) {
    stringFrequency2[str] = stringFrequency2[str]++ || 1;
  };

  for(let key in stringFrequency1) {
    if(!(stringFrequency2[key])) return false;
    
    if(!(stringFrequency1[key] == stringFrequency2[key])) return false;
  };

  return true;
};
