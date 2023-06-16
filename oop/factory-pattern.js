const person = function (fName, lName) {
  return {
    fName: fName,
    lName: lName,

    fullName: function () {
      return this.fName + " " + this.lName;
    },
  };
};

const res = person("gowtam", "kumar");
console.log(res.fullName());
