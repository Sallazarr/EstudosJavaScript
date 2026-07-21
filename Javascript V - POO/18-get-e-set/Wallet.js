class Wallet {
  #amount;
  #username;

  constructor(amount) {
    this.#amount = 100.99 * 100; // 10099
  }

  get amount() {
    return this.#amount / 100;
  }

  set username(newUsername) {
    if (typeof newUsername === "string") {
      this.#username = newUsername;
    } else {
      console.log("username must be of type string");
    }
  }
  get username() {
    return this.#username;
  }
}
const myWallet = new Wallet();

console.log(myWallet.amount); // 100.99

myWallet.username = "Salazar";
console.log(myWallet.username); // Salazar

myWallet.username += " Slytherin";
console.log(myWallet.username); // Salazar Slytherin

myWallet.username = true;
console.log(myWallet.username);
