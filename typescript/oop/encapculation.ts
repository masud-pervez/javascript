// encapculation main concept is access and unauthorize access and mutation of specifie propertics of an object
// exmple: private, public protected, readonly, static etc,
class PersonEncap {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  getFullName() {
    return this.name + " " + this.age;
  }
}

const resultEncap = new PersonEncap("Gowtam", 50);

console.log(resultEncap.getFullName());
