//  abstract method class instant create kore access
//  kora jai na but ohter class inheritance kore access kora jai
abstract class Charater {
  public firstName: string;
  public lastName: string;
  constructor(firstName: string, lastName: string) {
    (this.firstName = firstName), (this.lastName = lastName);
  }
  // abstract getStrict(): number;
  FullName(): string {
    return `${this.firstName} + ${this.lastName}`;
  }
}

// const result2 = new Charater("Gowtam", "kumar"); you can not use abstract method

class FullTimeEmployee extends Charater {
  constructor(firstName: string, lastName: string, private stipend: number) {
    super(firstName, lastName);
  }
  getStipend(): number {
    return this.stipend;
  }
}

const result = new FullTimeEmployee("Gowtam", "kumar", 50); // you can use this method Charater class

console.log(result.FullName());
