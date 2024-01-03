// polymorphism holo onk structure, onk shap,
// ploymorphism holo parent class ke overright kore. onk somy deka jai parent a function ache but 2 rokom kaj korte hobe tokhon same function call kore overright kore fala that mean shap alada hobe

class SmartDevice {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  messageOption() {
    console.log("I am sending to you phone", this.price);
  }
}

class Phone extends SmartDevice {
  constructor(name, price, camera) {
    super(name, price);
    this.camera = camera;
  }
  hello() {
    console.log("I am sending to you phone");
  }
}

class watch extends SmartDevice {
  constructor(name, price, color) {
    super(name, price);
    this.color = color;
  }
  Color() {
    console.log("Watch Color is Red");
  }
}

class Tablet extends SmartDevice {
  constructor(name, price, isWifi) {
    super(name, price);
    this.isWifi = isWifi;
  }

  messageOption() {
    //this function overright parent class function ke. 
    console.log("I am received to you phone", this.price);
  }
}

const susam = new Phone("Iphone", 1400, "65GB");
console.log(susam);
// susam.messageOption();

// console.log("🚀 ~ susam.messageOption();:", susam.messageOption());
const tab = new Tablet("samsung", 2300, true);
console.log(tab.messageOption());
// tab.PriceTable();
// const HandWatch = new watch("cosonc", 354, "yellow");
// console.log(HandWatch);
// HandWatch.Color();
