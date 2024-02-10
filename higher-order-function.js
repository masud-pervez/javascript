// Higher order function example: map, filter, and reduce.
function hello() {
  return function () {
    console.log("Hello World");
  };
}

hello()();
