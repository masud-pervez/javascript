const person = {
  fName: "Gowtam",
  lName: "kumar",
  fullName: function () {
    return this.fName + " " + this.lName;
  },
};


console.log(person.fullName());
