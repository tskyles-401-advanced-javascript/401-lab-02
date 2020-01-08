'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
class Validator {
  constructor(schema, input){
    this.schema = schema;
    this.input = input;
  }
  isValid(this.schema, this.input){
    let valid = true;
    for(let fieldName in schema.fields){
      let field = schema.fields[fieldName];
      // am i required and set?
      let required = field.required
        ?validator.isTruthy(input[fieldName])
        :true;
      // am i the right type?
      // code through all the fields and check if type is correct
      let type = field.type
        ?validator.isCorrectType(input[fieldName], field)
        :true;
      if(!(required && type)){
        valid = false;
      }
    }
    return valid;
  }
  isString(this.input){
    return typeof input === 'string';
  }
  isObject(this.input){
    return typeof input === 'object' && !(input instanceof Array);
  }
  isArray(this.input){
    return Array.isArray(input) && (valueType? input.every(val => typeof val === valueType): true);
  }
  isBoolean(this.input){
    return typeof input === 'boolean';
  }
  isNumber(this.input){
    return typeof input === 'number';
  }
  isFunction(this.input){
    return typeof input === 'function';
  }
  isTruthy(this.input){
    return !!input;
  }
  isCorrectType(this.input, field){
    switch(field.type) {
    case 'string': return Validator.isString(input);
    case 'number': return Validator.isNumber(input);
    case 'array': return Validator.isArray(input, field.valueType);
    case 'object': return Validator.isObject(input);
    case 'boolean': return Validator.isBoolean(input);
    default: return false;
  }
}
// validator.isValid = (schema, input) => {
  
//   let valid = true;
  
//   for( let fieldName in schema.fields) {

//     let field = schema.fields[fieldName];

//     //Am I required and set?
//     let required = field.required
//       ? validator.isTruthy(input[fieldName])
//       : true;

//     //Am I the right type? 
//     //code and loop through all the fields... here. 
//     //call a isCorrectType function or something like that... 
//     let type = field.type
//       ? validator.isCorrectType(input[fieldName], field) 
//       : true;

//     //if anything is false ...    
//     if (!(required && type)){
//       valid = false;
//     }

//   }
//   return valid;
// };



// /**
//  * Is this a string?
//  * @param input
//  * @returns {boolean}
//  */
// validator.isString = (input) => {
//   return typeof input === 'string';
// };

// validator.isObject = (input) => {
//   return typeof input === 'object' && !(input instanceof Array);
// };

// validator.isArray = (input, valueType) => {
//   return Array.isArray(input) && (valueType? input.every(val => typeof val === valueType): true);
// };

// validator.isBoolean = (input) => {
//   return typeof input === 'boolean';
// }; 

// validator.isNumber = (input) => {
//   return typeof input ==='number';
// };

// validator.isFunction = (input) => {
//   return typeof input === 'function';
// };

// validator.isTruthy = (input) => {
//   return !!input;
// };

// validator.isCorrectType = (input, field)  => {
   
//   switch(field.type) {
//   case 'string': return validator.isString(input);
//   case 'number': return validator.isNumber(input);
//   case 'array': return validator.isArray(input, field.valueType);
//   case 'object': return validator.isObject(input);
//   case 'boolean': return validator.isBoolean(input);
//   default: return false;
//   }

// };
