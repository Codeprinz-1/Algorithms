// radix sort is a fun algorithm that takes advantage of a special characteristic of numbers
// numbers in a certain base is just a repetition of some single digits in an order
// radix sort only works on numbers so if we want to use it in other data types, we will have to find a way to
// represent them as numbers of some base or just use some other sorting algorithm
// radix sort has a lot of sub sections
// this is how it works, this is kinda hard to explain so i will try my best, it works by creating buckets
// and throwing numbers in a bucket first according to the outermost digit, the buckets are basically all the possible 
// digits that can exist in that base for example base 10 is 0 - 9, so each digit has its own buckeet and 
// the array of numbers is thrown into a bucket by checking the outermost number of the values first and then throwing the num
// the numbers into a bucket representing that outermost number and then we build back the array by merging the buckets starting from the one reptresenting the least digit
// in base 10, that would be the bucket representing 0
// then we do the same thing for the second to the last digit on the numbers
// and then we throw them into the bucket and rebuild the array again
// lets just dive into the algorithm

// first we need helper functions
// the first helper function we need is a function that tells us the number of digits in the number with the most digits in the array
// because we will use that number to know how many iterations of the throwing in and merging of the bucket to do

// but that function nedds a function to tell it how many digits are in a number so we will do that first

const digitCount = (number) => {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

// then the function that checks for the number of digits in the largest number
const mostDigits = (arr) => {
  let maxDigits = 0;
  for (let val of arr) {
    maxDigits = Math.max(maxDigits, digitCount(val));
  }
  return maxDigits;
}

// we also need a function to get the digit at a position so that we can check what it is and determine what bucket it's going into

const getDigit = (number, revIndex) => {
  // this is pretty mathematical and straight forward
  return Math.floor(Math.abs(number) / Math.pow(10, revIndex)) % 10;
}

// then to the algorithm itself
const radixSort = (arr) => {
  let maxDigitCount = mostDigits(arr)
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => [])
    for (let i = 0; i < arr.length; i++) {
      digitBuckets[getDigit(arr[i], k)].push(arr[i]);
    }
    arr = [].concat(...digitBuckets)
  }
  return arr;
}

// the radix sort algorithm has a time complexity of O(nm) where m is the number of digits in the digit with the highest number of digits in the array