module.exports = class Entity {
  constructor(name, hp, atk, def) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
  }
  attack(targetEntity) {
    targetEntity.hp -= this.atk - targetEntity.def;
  }
};
