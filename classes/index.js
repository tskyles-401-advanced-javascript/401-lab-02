'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const subaru = new VehicleClass.Car('Subaru Impreza');
console.log(subaru.name, subaru.drive(), subaru.stop());

const suzuki = new VehicleClass.Motorcycle('Suzuki');
console.log(suzuki.name, suzuki.wheelie(), suzuki.stop());
