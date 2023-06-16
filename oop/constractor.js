function Person(fName, lName) {
  this.fName = fName;
  this.lName = lName;

  this.fullName = function () {
    return this.fName + " " + this.lName;
  };
}

const res = new Person("gow", "pal");

console.log(res);
