function NewPerson(name, age) {
  this.name = name;
  this.age = age;

  function fullNam() {
    //this functon is abstract becase you dont use outside
    return this.name + " " + "Kumar";
  }

  this.nice = function () {
    console.log("just test fun");
    fullNam();
  };
}

const rws = new NewPerson("gowam", 30);

console.log(rws.nice());
