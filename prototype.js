const player = {
  name: "Gowtam kumar",
  age: 29,
  country: "Bangadesh",
};
console.log("🚀 ~ player:", player);
const createObject = Object.create(player);
console.log("🚀 ~ createObject:", createObject); // result {} blank becouse prototype by doing,

// prototype is noting. just js ar je kono function ar  propertiy je ta object ke point kore
/// javascript is prototype language. prototype je kaj kore same kaj kore class.
/// js inharitence hoy prototype ar madome. but onno language inharitence hoy class ar modom diya.
// we are inherite by Object.create(Person.prototype)

//...what is diference new keyword and without new keyword for constructor?.

// without new keyword example below
function Person(name, age) {
  //this is constructor function
  let person = Object.create(Person.prototype); //this is the inharitence prototype
  person.name = name;
  person.age = age;

  return person;
}

Person.prototype = {
  eat() {
    return "I am eating rich";
  },
  sleeping() {
    return "Right now i want to be sleeping!";
  },
};

const newPerson = Person("gowtam kumar", 30);
console.log(newPerson.eat());

// new keyword example below
function PersonNew(name, age) {
  this.name = name;
  this.age = age;
}

PersonNew.prototype = {
  eat() {
    return "gowtam kum I am eating rich";
  },
  sleeping() {
    return "Right now i want to be sleeping!";
  },
};

const gowtam = new PersonNew("gowtam kumar", 30);
console.log(gowtam.eat());

// let,s go convert to class

class ConverClassPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return "i am Eating Right";
  }
  sleep() {
    return "I am Sleeping everyday";
  }
  play() {
    return "we are playing everyday";
  }
}

const clResult = new ConverClassPerson("Gowtam kumar", 50);
console.log("🚀 ~ clResult:", clResult.eat());


