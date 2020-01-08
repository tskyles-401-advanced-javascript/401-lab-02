'use strict';
/**
 * @class
 * @param {string} name - The name of the vehicle
 * @param {number} wheels - The number of wheels on vehicle
 */
class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  /**
   * @function drive
   * @returns {string} 
   */
  drive() {
    return 'Moving Forward';
  }
  /**
   * @function stop
   * @returns {string} 
   */
  stop() {
    return 'Stopping';
  }
}
/**
 * @class
 * @param {string} name - Inherits name of the parent Class
 */
class Car extends Vehicle {
  constructor(name) {
    super(name, 4);
  }
}
/**
 * @class
 * @param {string} name - Inherits name of the parent Class
 */
class Motorcycle extends Vehicle {
  constructor(name) {
    super(name, 2);
  }
  /**
   * @function wheelie
   * @returns {string} 
   */
  wheelie() {
    return 'Wheee!';
  }
}
/**
 * Exports car and motorcycle objects
 * @module Car,Motorcycle
 */
module.exports = { Car, Motorcycle };
