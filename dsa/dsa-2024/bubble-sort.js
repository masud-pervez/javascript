const array = [
  1, 2, 55, 66, 88, 3, 4, 5, 6, 565, 900, 7, 8, 9, 10, 33, 11, 22, 33, 65,
];

function bubbleSort(arr, len) {
  let temp = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      ///len - i - 1 this line only unnecessary length loop na kora
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
bubbleSort(array, array.length);
console.log(array);
