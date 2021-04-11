// recursion involves a function calling itself until a base condition is met for example

const countDown = (num) => {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// another examples

const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

const collectOddValues = (arr) => {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

// recursion must not always be a function calling itself for example

const isOdd = (num) => {
  if (num === 1) return true;
  return !isEven(num)
}

const isEven = (num) => {
  return isOdd(num -1)
}