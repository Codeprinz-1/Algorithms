// this is the normal search most people know which involves looping through
// and comparing each value to the one being searched for

const linearSearch = (arr, val) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}