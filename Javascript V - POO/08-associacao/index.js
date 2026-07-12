const Address = require("./Address");
const Person = require("./Person");

// const addr = new Address("Rua Falsa", 99, "Bairro Falso", "Cidade Falsa", "EF");

const john = new Person(
  "John Doe",
  "Rua Falsa",
  99,
  "Bairro Falso",
  "Cidade Falsa",
  "EF",
);

console.log(john);

console.log(john.address.fullAddress());
