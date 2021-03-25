// this pattern involves creating a window and moving the window based on a condition

const maxSubArraySum = (array, num) => {
  if(array.length < num) return null;
  let max = 0;
  let tempmax = 0;

  for(let i = 0; i < num; i++) {
    max += array[i];
  }

  for(let i = num; i < array.length; i++) {
    tempmax = max + array[i] - array[i - num]
    max = Math.max(tempmax, max)
  }
  console.log(max)
}

maxSubArraySum([1,2,3,4,5], 3)