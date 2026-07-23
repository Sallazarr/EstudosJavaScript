const Entity = require("./Entity");

module.exports = class Survivor extends Entity {
  constructor(name, hp, atk, def, gunDamage, ammo) {
    super(name, hp, atk, def);
    this.gunDamage = gunDamage;
    this.ammo = ammo;
  }

  attack(targetEntity) {
    if (this.ammo > 0) {
      targetEntity.hp -= this.atk + this.gunDamage - targetEntity.def;
      this.ammo -= 1;
    } else {
      targetEntity.hp -= this.atk - targetEntity.def;
    }
  }
};
