'use strict';

// let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
class Validator {
  constructor(){}
  isValid(schema, input){
    let valid = true;
    for(let fieldName in schema.fields){
      let field = schema.fields[fieldName];
      // am i required and set?
      let required = field.required
        ?this.isTruthy(input[fieldName])
        :true;
      // am i the right type?
      // code through all the fields and check if type is correct
      let type = field.type
        ?this.isCorrectType(input[fieldName], field)
        :true;
      if(!(required && type)){
        valid = false;
      }
    }
    return valid;
  }
  isString(input){
    return typeof input === 'string';
  }
  isObject(input){
    return typeof input === 'object' && !(input instanceof Array);
  }
  isArray(input, valueType){
    return Array.isArray(input) && (valueType? input.every(val => typeof val === valueType): true);
  }
  isBoolean(input){
    return typeof input === 'boolean';
  }
  isNumber(input){
    return typeof input === 'number';
  }
  isFunction(input){
    return typeof input === 'function';
  }
  isTruthy(input){
    return !!input;
  }
  isCorrectType(input, field){
    switch(field.type) {
    case 'string': return this.isString(input);
    case 'number': return this.isNumber(input);
    case 'array': return this.isArray(input, field.valueType);
    case 'object': return this.isObject(input);
    case 'boolean': return this.isBoolean(input);
    default: return false;
    }
  }
}

module.exports = new Validator;
