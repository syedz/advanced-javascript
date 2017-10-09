/*
  Sudo classical inheritance or constructor pattern.

  Javascript doesn't have a class, but can mimick using function constructor.

  __proto__ is on a object
  prototype is on a function - points to an object

  Pros:
  - Most common, used everywhere
  - Feels more natural, from OOP
  - Can create private variables (prototype doesn't)
 */

"use strict";

function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;

  this.full_name = function() {
    // Using closures to make it ummutable
    // Can't do in prototype
    return first_name + ' ' + last_name;
  };
}

Person.prototype.full_name_prototype = function() {
  return this.first_name + ' ' + this.last_name;
};

// var dude = Person('zee', 'syed'); // Doesn't work
var dude = new Person('zee', 'syed');
dude.first_name = 'Zoo'; // Can't change because private variable using closure
console.log(dude.full_name());
dude.first_name = 'Moo';
console.log(dude.full_name_prototype());

// var dude = {};
// Person.call(dude, "zee", "syed");
// console.log(dude);
