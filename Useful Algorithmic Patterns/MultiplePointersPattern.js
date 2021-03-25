// this is a pettern where pointers are used to navigate through a sequence
// depending on some condition, you'll see in a minute

// this function takes an array of numbers sorted in acending order
// and returns the first pair that sums to zero or undefined if there is no pair

const sumZero = (array) => {

  // create the pointers
  let firstPointer = 0;
  let SecondPointer = array.length - 1;

  // loop
  while(SecondPointer > firstPointer) {
    // sum the elements bieng pointed at
    let sum = array[SecondPointer] + array[firstPointer];

    // if the sum is zero, we are done
    if(sum === 0) {
      return [array[firstPointer], array[SecondPointer]];

    // if sum is greater than zero, we reduce the secondpointer 
    // cause reducing it will reduce the sum, remember, the array is sorted
    } else if(sum > 0) {
      SecondPointer--;

    // if sum is less than zero, we increase the firstpointer 
    // cause increasing it will increase the sum, remember
    } else {
      firstPointer++;
    }
  }
}

// another example


const countUniqueValues = (array) => {
  if(array.length === 0) return 0;
  let pointer = 0;
  for(let pointer2 = 1; pointer2 < array.length; pointer2++) {
    if(array[pointer] !== array[pointer2]) {
      pointer++;
      array[pointer] = array[pointer2];
    };
  };
  return (pointer + 1);
};