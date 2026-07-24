const Survivor = require("./Survivor");
const Infected = require("./Infected");
const Nemesis = require("./Nemesis");

const leon = new Survivor("Leon", 100, 10, 15, 30, 2);
const zombie = new Infected("Zombie", 80, 12, 5, 8);
const mrX = new Nemesis("Mr. X", 300, 25, 20, 15);

// Função para imprimir o painel de forma limpa e imersiva
function showStatus() {
  console.log(`
  🩸 --- STATUS DE SOBREVIVÊNCIA --- 🩸
  👨 ${leon.name.padEnd(8)} | ❤️ HP: ${leon.hp.toString().padEnd(3)} | 🔫 Munição: ${leon.ammo}
  🧟 ${zombie.name.padEnd(8)} | ❤️ HP: ${zombie.hp.toString().padEnd(3)} | 💀 Frenesi: ${zombie.frenzyBonus}
  🦇 ${mrX.name.padEnd(8)} | ❤️ HP: ${mrX.hp.toString().padEnd(3)} | 🧬 Fase: ${mrX.phase}
  ---------------------------------------`);
}

console.log("\n🔥 INÍCIO DO COMBATE 🔥");
showStatus();

// Turno 1
console.log("\n💥 [TURNO 1]");
console.log("Leon atira no Zombie! | Zombie morde Leon! | Mr. X esmaga Leon!");
leon.attack(zombie);
zombie.attack(leon);
mrX.attack(leon);
showStatus();

// Turno 2
console.log("\n💥 [TURNO 2]");
console.log("Leon gasta a última bala no Mr. X!");
leon.attack(mrX);
mrX.mutate();
console.log("Leon usa uma Erva Verde!");
leon.useHerb();
showStatus();

// Turno 3
console.log("\n💥 [TURNO 3]");
console.log("Mr. X ataca com tentáculos! | Leon puxa a faca contra o Zombie!");
mrX.attack(leon);
leon.attack(zombie);
showStatus();
