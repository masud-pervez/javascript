const a = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 900, 10, 33, 55, 66, 88, 11, 22, 33, 65, 565,
];
const len = a.length;
function inserttionSort(arr, len) {
  let i, j, item;
  for (i = 1; i < len; i++) {
    item = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > item) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = item;
  }
  return arr;
}

console.log(inserttionSort(a, len));
