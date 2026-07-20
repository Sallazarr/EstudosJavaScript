class Vehicle {
  move() {
    console.log("The vehicle is moving");
  }
}

class Car extends Vehicle {
  move() {
    console.log("The car is moving");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("The ship is moving");
  }
}

class aircraft extends Vehicle {
  move(speed) {
    console.log(`The aircraft is moving at ${speed} km/h`);
  }
}

const delorean = new Car();
const blackPeral = new Ship();
const epoch = new aircraft();

// delorean.move();
// blackPeral.move();
// epoch.move(80);

function start(vehicle) {
  console.log("Starting the vehicle...");
  vehicle.move();
}

start(delorean);
start(blackPeral);
start(epoch);
