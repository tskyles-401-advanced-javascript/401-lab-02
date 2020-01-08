'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class');

/**
 *  Implement a car using a Constructor
 *  @function
 *  @param {string} name - Assigns the name to the instance of that vehicle
 */ 
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());
/**
 *  Implement a motorcycle using a Constructor
 *  @function
 *  @param {string} name - Assigns the name to the instance of that vehicle
 */ 
const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

/**
 *  Implement a car using a Constructor
 *  @function
 *  @param {string} name - Assigns the name to the instance of that vehicle
 */ 
const subaru = new VehicleClass.Car('Subaru Impreza');
console.log(subaru.name, subaru.drive(), subaru.stop());
/**
 *  Implement a motorcycle using a Class
 *  @function
 *  @param {string} name - Assigns the name to the instance of that vehicle
 */ 
const suzuki = new VehicleClass.Motorcycle('Suzuki');
console.log(suzuki.name, suzuki.wheelie(), suzuki.stop());
