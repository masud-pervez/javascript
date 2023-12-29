// head
// tail
// Enqueue as like push
// Dequeue as like pull
// circular queue
// circular queue is must (tail+1) % (size +1)

const arr = [];
let head = 0;
let tail = 0;
let size = 5;

function dequeue(arr, value) {
  if (tail === head) {
    console.log("Circular queue is empty!");
    return;
  }
  delete arr[head];
  head = (head + 1) % (size + 1);
}

function enqueue(arr, value) {
  if ((tail + 1) % (size + 1) == head) {
    console.log("Circular queue is full");
    return;
  }
  arr[tail] = value;
  tail = (tail + 1) % (size + 1);
}

console.log(enqueue(arr, 10));
console.log(enqueue(arr, 20));
console.log(arr);
console.log(dequeue(arr, 10));
console.log(dequeue(arr, 3));
console.log(dequeue(arr, 20));
console.log("tail", tail);
console.log("head", head);
console.log(arr);
