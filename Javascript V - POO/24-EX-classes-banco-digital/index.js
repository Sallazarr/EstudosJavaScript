const App = require("./App");

App.createUser("Isaac Pontes", "isaac@email.com");
App.createUser("Lucas Queiroga", "lucas@email.com");
App.createUser("Juliana Conde", "juliana@email.com");

App.deposit(100, "isaac@email.com");

App.transfer("isaac@email.com", "lucas@email.com", 20);
App.transfer("lucas@email.com", "isaac@email.com", 10);

App.changeFee(10);
App.takeLoan(2000, 24, "juliana@email.com");

console.log(App.findUser("isaac@email.com"));
console.log(App.findUser("isaac@email.com").account);
console.log(App.findUser("lucas@email.com"));
console.log(App.findUser("lucas@email.com").account);
console.log(App.findUser("juliana@email.com"));
console.log(App.findUser("juliana@email.com").account);
console.log(App.findUser("juliana@email.com").account.loans[0].installments);
