// ----------prototype inheritance and es6--------------

function IPerson(name, age) {
  // parent class
  this.name = name;
  this.age = age;
}

function Cricketer(name, age, type, country) {
  //this sub class
  // if person fun ke jodi this hishabe ai cricketer object ke korete cai tahole
  // IPerson(this) ke defind kore dite hobe. ata muloto IPerson ke inherite kore niya asachi
  IPerson.call(this);
  this.name = name;
  this.age = age;
  this.type = type;
  this.country = country;
}

IPerson.prototype = {
  eat: function () {
    return `${this.name} is eating`;
  },
};

Cricketer.prototype = Object.create(IPerson.prototype); // that mine cricketer ar moddha IPerson ar je prototype korea ache seta inherite kore niya aschi.
// if you want to be overight prototype constructor
Cricketer.prototype.constructor = Cricketer; //right now this cricketer is prototype constructor
Cricketer.prototype.play = function () {
  return `${this.name} is playing`;
};
// const result = new IPerson("gowtam kumar", 30);
// console.log("🚀 ~ result:", result.eat());

const result = new Cricketer(
  "Gowtam kumar",
  29,
  "Javascript Developer",
  "bangladesh"
);
// console.log("🚀 ~ result:", result.play());

// -----let convert class-----
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

class NewCricketer extends Person {
  constructor(name, age, type, country) {
    super(name, age);
    // this.name = name;
    // this.age = age;
    this.type = type;
    this.country = country;
  }

  play() {
    //method
    return `${this.name} is playing`;
  }
  get getterName() {
    //this gettter we can user as like property moto
    return `${this.name}`;
  }

  set setterName(name) {
    // setter
    this.name = name;
  }

  static isAge() {
    // if you use this static fun no need to create instance. direct use korete para jabe
    return "This is a Static fun";
  }
}

const newCricket = new NewCricketer(
  "Gowtam kumar",
  29,
  "Javascript Developr",
  "Bangladesh"
);

// console.log(newCricket.play());
console.log(newCricket.getterName); //getter
newCricket.setterName = "Poly"; //setter
console.log(newCricket.name);
console.log(NewCricketer.isAge()); //this called static fun
