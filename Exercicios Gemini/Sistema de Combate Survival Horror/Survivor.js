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
  useHerb() {
    if (this.hp <= 50) {
      this.hp += 50;
    } else if (this.hp === 100) {
      console.log("Vida já cheia");
    } else {
      this.hp = 100;
    }
  }
};
