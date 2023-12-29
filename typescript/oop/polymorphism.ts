// we can see getFullname function present insite two class
// and secend class override this override is polymorphism
class Person {
  public firstName: string;
  public lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

class PersonChil extends Person {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  getFullName(): string {
    return "Arko Paul";
  }
}

const result2 = new PersonChil("Gowtam", "KUma");
console.log(result2.getFullName());
