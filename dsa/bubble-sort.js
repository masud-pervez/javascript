const a = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 900, 10, 33, 55, 66, 88, 11, 22, 33, 65, 565,
];
const len = a.length;

function bubbleSort(arr, len) {
  let i, j, temp;
  let count = 0;
  for (i = 0; i < len; i++) {
    for (j = 0; j < len - i - 1; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(a, len));
