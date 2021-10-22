class PenDrive {
    constructor(capacity, color, price) {
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const Adata = new PenDrive('64GG', 'red', 2984);
console.log(Adata)