const a = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 33, 55, 66, 88, 11, 22, 33, 65, 565, 900,
].sort((a, b) => a - b);

function binarySearch(newArray, len, searchFor) {
  let left = 0;
  let mid = 0;
  let right = len;
  console.log("🚀 ~ right:", right);

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    console.log("dd", mid);
    if (newArray[mid] == searchFor) {
      return newArray[mid];
    }

    if (newArray[mid] < searchFor) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch(a, a.length, 565));
