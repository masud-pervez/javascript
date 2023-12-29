let arrStoreLen = 100;
const newArray = [];
let top = 0;

function push(value) {
  if (top < arrStoreLen) {
    newArray[top] = value;
    top = top + 1;
  } else {
    console.log("This Storeage is full! Soryyy");
  }
}

function pop() {
  if (top == 0) {
    console.log("This Storeage is full! Soryyy");
    return;
  } else {
    top = top - 1;
    delete newArray[top];
  }
}

push(2);
push(4);
push(8);
console.log("newArray", newArray);
pop();
pop();
pop();
console.log("newArray", newArray);
