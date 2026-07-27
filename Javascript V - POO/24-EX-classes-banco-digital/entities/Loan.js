const Installment = require("./Installment.js");

module.exports = class Loan {
  static #fee = 1.05;

  static get fee() {
    return Loan.#fee;
  }

  static set fee(newFee) {
    Loan.#fee = 1 + newFee / 100;
  }
  constructor(value, installments) {
    this.value = value;
    this.installments = [];
    for (let i = 1; i <= installments; i++) {
      this.installments.push(
        new Installment((value * Loan.#fee) / installments, i),
      );
    }
    this.createdAt = new Date();
  }
};
