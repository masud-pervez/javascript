// class static keyword use korle sai method object instance create kore access kora jai namespace.
// direct class name then static method . tarpor static medhod access kora jai
class Employee {
  public static headcount: number = 0;
  constructor(
    private initialName: string,
    private lastName: string,
    private job: string
  ) {
    Employee.headcount++;
  }
  public static newName(): number {
    return this.headcount;
  }
}
const resutl = new Employee("gowtam", "kumar", "dd");
// console.log(resutl.newName); //this way do not use static method
console.log(Employee.newName());// if you use static method you can access static method
