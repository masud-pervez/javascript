// jokhon kono function ke choriya chite na rekhe akta
// object ba class ar moddha capsulate kora hoy tokon take incaptulate bole
// privte is part of encapsulation

class Car {
  #speed = 100;
  location = "Tokyo japan";
  #name;
  #age;
  #skill;
  constructor(name, age, skill) {
    this.#name = name;
    this.#age = age;
    this.#skill = skill;
  }
  carrun;

  run() {
    return `I am ${this.#name}. i am running ${this.#speed} mph. i live in ${
      this.location
    }`;
  }
}

const carrun = new Car("Volvo", 33, "javascript");
console.log(carrun.name); //this place you can not use this property
carrun.name = "Bus"; //you can overright name and you can use this property

carrun.run();
console.log("🚀 ~ carrun.run():", carrun.run());

console.log("🚀 ~ carrun:", carrun.location); //you can use location
console.log("🚀 ~ age:", carrun.age); //you can not use age blocation
