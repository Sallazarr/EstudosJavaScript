module.exports = class Character {
  constructor(name, healthPoints, attackPoints, defensePoints) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
    this.defensePoints = defensePoints;
  }
  attack(targetCharacter) {
    targetCharacter.healthPoints -=
      this.attackPoints - targetCharacter.defensePoints;
  }
};
