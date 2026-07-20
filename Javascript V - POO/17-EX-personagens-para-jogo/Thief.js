module.export = class Thief extends Character {
  constructor(name, healthPoints, attackPoints, defensePoints) {
    super(name, healthPoints, attackPoints, defensePoints);
  }
  attack(targetCharacter) {
    targetCharacter.healthPoints -=
      2 * (this.attackPoints - targetCharacter.defensePoints);
  }
};
