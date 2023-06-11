class Car {
    #speed = 100;
    location= 'Tokyo japan'
    constructor(name) {
        this.name = name;
    }

    run(){
        console.log(`I am ${this.name}. i am running ${this.#speed} mph. i live in ${this.location}`)
    }
}

const carrun = new Car('Volvo')
console.log(carrun)
carrun.name = 'Bus'
carrun.location= 'Bangaladesh'
carrun.run()