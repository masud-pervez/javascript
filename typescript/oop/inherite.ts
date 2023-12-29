
class PersonExpmleInterit {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  getSomthing(v: string): string {
    return this.name + " " + v;
  }
}

class PersonEx extends PersonExpmleInterit {
  constructor(name: string, age: number) {
    super(name, age);
  }
}

const resultInherit = new PersonEx("Gowtma", 30);

console.log(resultInherit.getSomthing("kumar"));
