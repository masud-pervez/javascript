const array = [1, 7, 2, 3, 5, 6, 4];
// when this use?
// when 90% sort is not existed
// if 90%  array already

function insertionSort(arr, len) {
  let i, j, item;

  for (i = 1; i < len; i++) {
    item = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] < item) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = item;
  }
}

insertionSort(array, array.length);

console.log(array);

function insertionSortReverse(arr, len) {
  let i, j, item;

  for (i = 1; i < len; i++) {
    item = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] < item) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = item;
  }
}

insertionSortReverse(array, array.length);
console.log("🚀 ~ array:", array);
