class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const watch = new Product("Relógio de Pulso", "...", 80);
watch.addToStock(10);
console.log(watch);
console.log(watch.calculateDiscount(10)); // 72
console.log(watch.calculateDiscount(15));
