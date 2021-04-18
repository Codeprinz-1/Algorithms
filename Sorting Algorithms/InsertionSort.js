// insertion sort sorts an array by taking each value and inserting it where it is supposed to be basicaly
// so it works by taking a value and comparing it with the ones at the back of it and inserting it between
// a value it is less than and one it is greater than, it does this over and over again untill the whole array is sorted

const insertionSort = (arr) => {
    // define i to be one because we want to always have something behind it to compare it to
    for (let i = 1; i < arr.length; i++) {

        // set the current value to the one we are trying to fit at the right place
        let currentVal = arr[i];

        // loop through the values behing the current value and change the value in front of a value
        // to itself if the value is greater than our current value in order to make space for the current value
        // we keep doing this until we fing where it fits

        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }

        // when we fing where it fits, we place it there
        arr[j + 1] = currentVal;
    }
    return arr;
}

// the time complexity of insertion sort is O(n^2)