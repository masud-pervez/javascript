const arr = [2, 3, 5, 1, 90, 40, 43, 4, 6, 7];
const len = arr.length;

function SelectionSort(arr, len) {
  let i = 0;
  let j = 0;
  let index_min;
  let temp;
  for (i = 0; i < len - 1; i++) {
    index_min = i;
    for (j = i + 1; j < len; j++) {
      if (arr[j] < arr[index_min]) {
        index_min = j;
      }
    }

    if (index_min != i) {
      temp = j;
      arr[i] = arr[index_min];
      arr[index_min] = temp;
    }
  }
  return arr;
}
console.log(SelectionSort(arr, len));
