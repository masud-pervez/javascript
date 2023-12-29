let newArray = [];

let top = 0;

function push(arr, item) {
  const limitStack = 5;
  if (top > limitStack) {
    console.log("your array is full");
  } else {
    arr[top] = item;
    top += 1;
  }
}

push(newArray, 10);
push(newArray, 30);
push(newArray, 50);
push(newArray, 90);
push(newArray, 60);
console.log(top);

let item = 0;
function pop(arr) {
  if (top == 0) {
    item = arr[top];
    return item;
  }
}
pop(newArray);
pop(newArray);
pop(newArray);

console.log(pop(newArray));
