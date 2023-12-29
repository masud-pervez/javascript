// for (var i = 0; i < 3; i++) {
//   setTimeout(function() { alert(i); }, 1000 + i);
// }

(function () {
  var a = (b = 5);
})();

// console.log(0.1+0.2 === 0.3);
// console.log(NaN === NaNs);
//  What is the purpose of TypeScript's "never" type?*
const obj = { x: 1, y: 2, z: 3 };
const { x, ...rest } = obj;
console.log(x, rest);
