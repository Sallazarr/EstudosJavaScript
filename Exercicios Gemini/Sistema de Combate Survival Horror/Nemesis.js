const Entity = require("./Entity");

module.exports = class Nemesis extends Entity {
  constructor(name, hp, atk, def) {
    super(name, hp, atk, def);
    this.phase = "humanoid";
  }
  mutate() {
    if (this.phase === "humanoid") {
      console.log("Realizando mutação");
      this.phase = "tentacles";
      this.hp += 100;
      this.atk += 20;
    } else {
      console.log("Desfazendo mutação");
      this.phase = "humanoid";
      this.atk -= 20;
    }
  }
  attack(targetEntity) {
    if (this.phase === "humanoid") {
      targetEntity.hp -= this.atk - targetEntity.def;
    } else {
      targetEntity.hp -= 2 * (this.atk - targetEntity.def);
    }
  }
};
