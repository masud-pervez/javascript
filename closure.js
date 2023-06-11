// jokhon kono function nested function niya hoy and nested function call kora hoy. tokhon parent fun 1 bar call hoy.
// oi nested function tokhon call hoy na jodi baire thake call na kora hoy. just function return kore dai
// jokhon nested fun call kora hoy. tokhon jodi parent fun ar kono var use kora hoy tokhon oi function hoy jai closure .
// ar jodi nested ar moddha var use na kora hoy tahole closure hoy na. sum ke mere fale.
// 

function add() {
  let sum = 0;
  return function () { //this the closure 
    sum += 1;
  };
}
const newAdd = add();
console.dir(newAdd);
newAdd();
console.dir(newAdd);
newAdd();
console.dir(newAdd);
newAdd();
