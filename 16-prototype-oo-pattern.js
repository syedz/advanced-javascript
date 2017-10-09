/*
  What is prototypal inheritance?

  It's the prototype chain, no constructors, don't use 'new' keyword. Benefit is
  that we're using tools that Javascript offers natively.

  Pros:
  - Easier to understand
  - Feels more like Javascript
 */

// Example 1
var Person = {
  // Don't need if using Object.create()
  // init: function(first_name, last_name) {
  //   this.first_name = first_name;
  //   this.last_name = last_name;
  //
  //   return this;
  // },
  full_name: function() {
    return this.first_name + ' ' + this.last_name;
  }
};

// var zee = Object.create(Person);
// Second param in Object.create() describes properties of the objec that we're creating
var zee = Object.create(Person, {
  first_name: {
    value: 'Zee'
  },
  last_name: {
    value: 'Syed'
  }
});
console.log(zee);

// zee.init('Zee', 'Syed');
/*
  full_name() is on the Person object which is prototype of the zee object
 */
console.log(zee.full_name());




// Example 2
var Person2 = {
  full_name: function() {
    return this.first_name + ' ' + this.last_name;
  }
};

// Factory is a function that returns an object
function PersonFactory(first_name, last_name) {
  var person = Object.create(Person2);
  person.first_name = first_name;
  person.last_name = last_name;

  return person;
}

var zee2 = PersonFactory('zee2', 'syed');
console.log(zee2.full_name());





// Example 3
var Person3 = {
  full_name: function() {
    return this.first_name + ' ' + this.last_name;
  }
};

var Professional = Object.create(Person3);
var zee3 = Object.create(Professional);







// Example 4
var Person4 = {
  full_name: function() {
    return this.first_name + ' ' + this.last_name;
  }
};

var Professional2 = Object.create(Person4, {
  init: {
    value: function(honorific, first_name, last_name) {
      this.honorific = honorific;
      this.first_name = first_name;
      this.last_name = last_name;
    }
  },
  professional_name: {
    value: function() {
      return this.honorific + ' ' + this.first_name + ' ' + this.last_name;
    }
  }
});
var zee4 = Object.create(Professional2);
zee4.init('Mr', 'Zee', 'Syed');
console.log(zee4.full_name());
console.log(zee4.professional_name());
