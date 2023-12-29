// function person() {
//   const n = 100;
//   return (n * (n + 1)) / 2; //o(1) time complexity
// }

// console.log(person());

let n = 2;
let counter = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(n);
    // o(n2) time complexity
    counter += 1;
  }
}

console.log(counter);
