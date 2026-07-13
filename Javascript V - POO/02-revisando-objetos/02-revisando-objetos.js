// const book = {
//   title: "Eragon",
//   pages: 468,
//   published: true,
//   inStock: 20,
//   tags: ["fantasy", "adventure", "medieval"],
//   author: {
//     name: "Cristopher Paolini",
//   },
//   addOnStock(quantity) {
//     this.inStock += quantity;
//   },
// };

//Funções construtoras utilizam como padrão o PascalCase
function Book(title, pages, tags, author) {
  ((this.title = title),
    (this.pages = pages),
    (this.tags = tags),
    (this.author = author));
  this.published = false;
  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity;
  };
  this.save = function () {
    // Salva no DB
  };
}

const eragon = new Book();
