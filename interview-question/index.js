const res = [9, 8, 7, 6][(1, 0)];
console.log("🚀 ~ res:", res);

const z = (1, 2, 3, 4, 5);
console.log("🚀 ~ z:", z);

function a() {
  return "a";
}

function b() {
  return "b";
}

function c() {
  return "c";
}

const d = (c(), b(), a());
console.log("🚀 ~ d :", d);

const example = [9, 8, 7, 6][(1, 2, 3)]; 
const example2 = [9, 8, 7, 6][(8, 2, 3, 1)];

// I apologize for the confusion. Let's clarify further.

// In JavaScript, when you use comma-separated values inside square brackets without any other construct, such as another array or object, only the last value is considered. This is because the comma operator evaluates each expression but only returns the result of the last one.

// So, let's break down [9, 8, 7, 6][1, 2, 3]:

// [9, 8, 7, 6] creates an array with four elements: 9, 8, 7, and 6.
// 1, 2, 3 evaluates each expression separated by commas but returns only the last value, which is 3.
// Therefore, [9, 8, 7, 6][1, 2, 3] is equivalent to [9, 8, 7, 6][3]. It accesses the element at index 3 from the array [9, 8, 7, 6], which is 6.

// So, the result of [9, 8, 7, 6][1, 2, 3] is 6.

console.log(example);
console.log(example2);
