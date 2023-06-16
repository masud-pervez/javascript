 class Hero {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }

  getPower() {
    return this.power;
  }
  goForGrocery(budget) {
    if (this.power && budget > 500) {
      console.log(this.getPower());
    }
    return "Price is too high, i can not buy";
  }
}

const khirul = new Hero("Jobbar", "i have a power");
// console.log(khirul.power)
// console.log(khirul.getPower())
console.log(khirul.goForGrocery(100));
