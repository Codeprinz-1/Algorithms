// okay this one is an interesting one
// what happens here is quite simple, well depends on who you are
// we break down an array into two and break the broken one into two and so on until we have an array containing 
// just a value of nothing
// we utilize the fact that an array of one value or an empty array is always sorted
// so we merge them back up while sorting them as we go
// the main logic here is the merging algorithm so we will do that in a different function and call it in the merge sort function 
// the merge function is as follows

const merge = (arr1, arr2) => {
    // we define the necesary stuff (the new array we will return and the pointers with which we will sort the arrays while merging them)
    let newArr = [];
    let pointer1 = 0;
    let pointer2 = 0;

    // we want this to run only if both of the pointers are not at the end yet
    while(pointer1 < arr1.length && pointer2 < arr2.length) {

        // we push the smallest one first and so on
        // basicaly we use the multiple pointer pattern to sort-merge the arrays
        // look up multiple pointers pattern in the useful algorithmic patterns folder
        if (arr1[pointer1] > arr2[pointer2]) {
            newArr.push(arr2[pointer2]);
            pointer2++;
        }
        else if (arr1[pointer1] < arr2[pointer2]) {
            newArr.push(arr1[pointer1]);
            pointer1++;
        }
        else {
            newArr = newArr.concat([arr2[pointer2], arr1[pointer1]]);
            pointer1++;
            pointer2++;
        }
    }

    // then we add the remaining values in an array if we ran out of values in the other
    if (pointer1 < arr1.length) {
        newArr = newArr.concat(arr1.slice(pointer1));
    }
    if (pointer2 < arr2.length) {
        newArr = newArr.concat(arr2.slice(pointer2));
    }
    return newArr;
}

// then we define the merge sort algorithm as follows

const mergeSort = (arr) => {
    // it is a recursive function so it has to have a base case
    if (arr.length == 1) return arr;

    // we get the middle point of the array 
    let mid = Math.floor(arr.length / 2);

    // we split the array into left and right recursively
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    // then we merge the return value of merging the left and the right
    return merge(left, right);
}

// the timr complexity of merge sort is O(n log n)
// because for every n number of values we split log n times
// and for every of the individual arrays, we run merge on them which is O(n)
// so together, it is O(n log n)