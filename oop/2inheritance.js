// inheritance same boyshisto kono kisu alada class kore fala
// then oi class ke need onujaye interit kora
// super fun kore tar parent ke call kore and paramiter receive kore.

class SmartDevice {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Phone extends SmartDevice {
    constructor(name, price, camera) {
        super(name, price)
        this.camera = camera;
    }
    messageOption() {
        console.log('I am sending to you phone')
    }
}

class watch extends SmartDevice{
    constructor(name, price, color) {
        super(name, price)
        this.color = color;
    }
    Color(){
        console.log('Watch Color is Red')
    }
}

class Tablet extends SmartDevice {
    constructor(name, price, isWifi) {
       super(name, price)
        this.isWifi = isWifi;
    }
    PriceTable(){
        console.log('This Tablet price 3456')
    }
}

const susam = new Phone('Iphone', 1400, '65GB')
console.log(susam)
susam.messageOption()
const tab = new Tablet('samsung', 2300, true)
console.log(tab)
tab.PriceTable()
const HandWatch = new watch('cosonc', 354, 'yellow')
console.log(HandWatch)
HandWatch.Color()
