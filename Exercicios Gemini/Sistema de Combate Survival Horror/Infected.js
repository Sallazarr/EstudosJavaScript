const Entity = require("./Entity");

module.exports = class Infected extends Entity {
  constructor(name, hp, atk, def, frenzyBonus) {
    super(name, hp, atk, def);
    this.frenzyBonus = frenzyBonus;
  }

  attack(targetEntity) {
    targetEntity.hp -= this.atk + this.frenzyBonus;
  }
};
