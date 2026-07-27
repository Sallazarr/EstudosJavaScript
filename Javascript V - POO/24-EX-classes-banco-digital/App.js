const Deposit = require("./entities/Deposit");
const Loan = require("./entities/Loan");
const Transfer = require("./entities/Transfer");
const User = require("./entities/User");

module.exports = class App {
  static #users = [];

  static findUser(email) {
    const user = this.#users.find((user) => user.email === email);
    return user ?? null;
  }

  static createUser(fullname, email) {
    const userExists = this.findUser(email);
    if (!userExists) {
      this.#users.push(new User(fullname, email));
    } else {
      throw new Error(`User with email: ${email} already exists!`);
    }
  }

  static deposit(value, email) {
    const user = App.findUser(email);
    if (user) {
      const newDeposit = new Deposit(value);
      user.account.addDeposit(newDeposit);
    }
  }

  static transfer(fromUserEmail, toUserEmail, value) {
    const fromUser = App.findUser(fromUserEmail);
    const toUser = App.findUser(toUserEmail);
    if (fromUser && toUser) {
      const newTransfer = new Transfer(fromUser, toUser, value);
      fromUser.account.addTransfer(newTransfer);
      toUser.account.addTransfer(newTransfer);
    }
  }

  static takeLoan(value, installments, email) {
    const user = App.findUser(email);
    if (user) {
      const newLoan = new Loan(value, installments);
      user.account.addLoan(newLoan);
    }
  }

  static changeFee(newFee) {
    Loan.fee = newFee;
  }
};
