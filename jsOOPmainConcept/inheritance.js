class Bike {
    constructor() {
        this.company = "Honda";
    }
}

class Vehicle extends Bike {
    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
    }
}

class Livo extends Vehicle{
    constructor(looking){
        super();
        this.looking = looking;
    }
}


var resultLooking = new Livo("so bad bike")
var result = new Vehicle("Livo", "108900");
console.log(resultLooking.company, resultLooking.looking);
console.log("Bike Brand Name:", result.company, "Bike Name: ", result.name, "Bike Price Name", result.price);