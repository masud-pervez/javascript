class Animal {
    constructor(name) {
        this.name = name;
    }
    food() {
        console.log(this.name + " eats food now");
    }
}
class Man extends Animal {
    food() {
        super.food(); // this is deffarant with inharitance and polymorphism
        console.log(this.name + " eats rich");
    }
}

class Woman extends Man {
    food() {
        super.food(); // this is deffarant with inharitance and polymorphism
        console.log(this.name + " eats codbel");
    }
}

const result = new Woman("Fox");

result.food();