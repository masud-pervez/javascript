// abstraction hole inplemention detail ke hiden rakhe upere kisu interface diya.
// that,s mine car engine and car body. you are show just car body but you can not show car engine this abstraction
// amra je sob kaj korlam ata jodi use kori tahole vitore ki hocca ta kintu amra bujte parchi na ar atai hole abstraction
class ValoErray {
  #items;
  constructor() {
    this.#items = [];
  }

  getItem() {
    return [...this.#items];
  }
  addItem(item) {
    return this.#items.push(item);
  }
  removeItem(deleteItem) {
    return (this.#items = this.#items.filter((item) => item !== deleteItem));
  }
  modifyItem(changeItem, newItem) {
    const index = this.#items.indexOf(changeItem);
    if (index !== -1) {
      this.#items[index] = newItem;
    }
  }
}

const newArray = new ValoErray();
newArray.addItem("Hello Javascript dev");
newArray.addItem("Hello PHP dev");
console.log(newArray.getItem());
// newArray.removeItem("Hello PHP dev");
console.log(newArray.getItem());
newArray.modifyItem("Hello PHP dev", "I love Javascript programming language");
console.log(newArray.getItem());
