// head
// tail
// Enqueue as like push
// Dequeue as like pull
// circular queue
// circular queue is must (tail+1) % (size +1)

const newArr = [];
let head = 0;
let tail = 0;
let size = 10;

function enqueue(newArr, value) {
  if ((tail + 1) % (size + 1) == head) {
    console.log("This circular queue is full");
    return;
  }
  newArr[tail] = value;
  tail = (tail + 1) % (size + 1); //modules
}

function dequeue(newArr) {
  if (head === tail) {
    console.log("circular queau is full");
    return;
  }
  delete newArr[head];
  head = (newArr + 1) % (size + 1);
}
enqueue(newArr, 3);
enqueue(newArr, 3);

dequeue(newArr);
dequeue(newArr);

console.log(newArr);
