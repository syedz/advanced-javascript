/*
  Sudo classical inheritance or constructor pattern.

  Javascript doesn't have a class, but can mimick using function constructor.

  __proto__ is on a object
  prototype is on a function - points to an object
 */

"use strict";

function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

Person.prototype.full_name = function() {
  return this.first_name + ' ' + this.last_name;
};

function Professional(honorific, first_name, last_name) {
  Person.call(this, first_name, last_name);
  this.honorific = honorific;
}

Professional.prototype = Object.create(Person.prototype);

Professional.prototype.professional_name = function() {
  return this.honorific + ' ' + this.first_name + ' ' + this.last_name;
}

var prof = new Professional('Dr.', 'Zee', 'Syed');
console.log(prof.professional_name());
console.log(prof.full_name());
