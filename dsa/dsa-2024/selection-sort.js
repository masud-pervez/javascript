const array = [
  1, 2, 55, 66, 88, 3, 4, 5, 6, 565, 900, 7, 8, 9, 10, 33, 11, 22, 33, 65,
];

function arrayReverse(array) {
  let len = array.length;
  let maxIndex = 0;
  let temp;

  for (let i = 0; i < len; i++) {
    maxIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] > array[maxIndex]) {
        maxIndex = j;
      }
    }

    if (maxIndex != i) {
      temp = array[i];
      array[i] = array[maxIndex];
      array[maxIndex] = temp;
    }
  }
}

arrayReverse(array);

function selectionSort(array) {
  let len = array.length;
  let indexmin = 0;
  let temp;
  for (let i = 0; i < len; i++) {
    indexmin = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[indexmin]) {
        indexmin = j;
      }
    }
    if (indexmin != i) {
      temp = array[i];
      array[i] = array[indexmin];
      array[indexmin] = temp;
    }
  }
}
selectionSort(array);
