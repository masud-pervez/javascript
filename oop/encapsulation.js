class Student {

  constructor() {
    var name;
    var marks;
  }
  getName() {
    return this.name
  }
  setName(name) {
    this.name = name;
  }
  getMarks() {
    return this.marks;
  }
  setMarks(marks) {
    this.marks = marks;
  }

}

var stud = new Student();
stud.setName("gowtam Kumar")
stud.setMarks(26);
console.log(stud.getMarks(), stud.getName());
