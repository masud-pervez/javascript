const newArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 900, 10, 33, 55, 66, 88, 11, 22, 33, 65, 565,
];

const LianerSearch = (array, len, value) => {
  for (let i = 0; i < len; i++) {
    if (array[i] === value) {
      return array[i];
    } else {
      return -1;
    }
  }
};

console.log(LianerSearch(newArray, newArray.length, 99));
