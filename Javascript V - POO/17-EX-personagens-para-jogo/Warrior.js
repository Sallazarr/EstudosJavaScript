const Character = require("./Character");

module.exports = class Warrior extends Character {
  constructor(name, healthPoints, attackPoints, defensePoints, shieldPoints) {
    super(name, healthPoints, attackPoints, defensePoints);
    this.shieldPoints = shieldPoints;
    this.stance = "attack";
  }

  attack(targetCharacter) {
    if (this.stance === "attack") {
      super.attack(targetCharacter);
    }
  }

  switchStance() {
    if (this.stance === "attack") {
      this.stance = "defense";
      this.defensePoints += this.shieldPoints;
    } else {
      this.stance = "attack";
      this.defensePoints -= this.shieldPoints;
    }
  }
};
