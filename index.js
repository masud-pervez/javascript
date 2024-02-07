console.log(10 ** 3); //Exponentiation that mine 10 x 10 = 100 x 10
const resutl = Math.pow(10, 3);
// console.log(resutl);

console.log(10 / 3); //division just division kore dei;
console.log(10 % 3); //vagse bar kora hoy
console.log(3 && 3);

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  default:
    day = "There is no matching! sorry for than";
}

// console.log(day);

const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  // console.log(person);
  text += person[x];
}

// console.log(text);

const cars = "Javascript";

let texts = "";
for (let x of cars) {
  //   console.log(x);
  texts += x;
}

let i = 0;
// while (i < 10) {
//     // console.log(i);
//     i++;
// }

do {
    i++;
  console.log("aaa",i);
} while (i < 10);
