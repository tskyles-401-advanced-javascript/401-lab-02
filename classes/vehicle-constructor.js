'use strict';
/**
 * @constructor Vehicle
 * @param {string} name - The name of the vehicle
 * @param {number} wheels - The number of wheels
 */
const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};
/**
 * @function drive
 * @returns {string}
 */
Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};
/**
   * @function stop
   * @returns {string} 
   */
Vehicle.prototype.stop = () => {
  return 'Stopping';
};

/**
 * @constructor Car
 * @param {string} name - The name of the car
 */
const Car = function(name) {
  Vehicle.call(this, name, 4);
};
/**
 * @function
 * @returns {object}
 */
Car.prototype = new Vehicle();
/**
 * @constructor Motorcycle
 * @param {string} name 
 */
const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};
/**
 * @function
 * @returns {object}
 */
Motorcycle.prototype = new Vehicle();
/**
 * @function wheelie
 * @returns {string}
 */
Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};
/**
 * Exports car and motorcycle objects
 * @module Car,Motorcycle
 */
module.exports = {Car, Motorcycle};
