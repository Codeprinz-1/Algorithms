// this pattern involves creating a window and moving the window based on a condition
// next function is a function that takes an array and a number n as parameters 
// and checks for the maximum value we would get by adding any n elements
// so if n is 5 then it will check the maximum value we would get by adding 5 elements in the array

const maxSubArraySum = (array, num) => {
  // first check for edge case where the number of elements to add is greater 
  // than the number of elements in the array
  if(array.length < num) return null;

  // initialize two variables to store the max value whilw the calculation happens
  let max = 0;
  let tempmax = 0;

  // find the sum of the first num elements
  for(let i = 0; i < num; i++) {
    max += array[i];
  }

  // loop through the array and move forward by adding the next element
  // while substracting the element at the back, also we dont start from the begining of the array for two reasons
  // one, because we have already added the first num elements in the loop above
  // and two, because we want the last addition to be from the element at the 
  // difference between the length of the array and num so that there are enough supplies of elements to add
  for(let i = num; i < array.length; i++) {
    tempmax = max + array[i] - array[i - num]

    // reset max to the maximun between max and the current sum
    max = Math.max(tempmax, max)
  }
  return max
}

// as you might have noticed, this pattern is like a sliding window, 
// if you dont understand, you can hit me up at anyaohaprince122@gmail.com
// i will be happy to help you understand