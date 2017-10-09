"use strict";

/*
  What do call(), bind(), and apply() do?

  To stabilize the value of this

  Can add properties to functions.

  Normally you would use call(), unless the function takes a variable number
  of parameters, without having to provide those parameters in the function
  definition.

  Use bind() on function expressions, not when declaring a function. Only works
  when associated with a variable. Bind is applicable to the function object that
  is created.
 */

// Example 1

function a(param1, param2) {
  console.log(this); // In strict mode, default value of this is going to be undefined
};

// console.log(a.name);
// console.log(a.length);
//
// a.moo = 1;
// console.log(a.moo);

// a.call(1);

// Example 2

var zee = {
  someProp: 1,
  checkThis: function() {
    function checkOther() {
      console.log(this); // Global object
    }
    checkOther.call(this);
  }
};

zee.checkThis();


// Example 3
function a(b, c, d) {
  console.log(this);
  console.log(b);
  console.log(c);
  console.log(d);
}
a.call(1,2,3,4);

// Example 4
function a2(b, c, d) {
  console.log(this);
  console.log(b);
  console.log(c);
  console.log(d);
}
a2.apply(1, [2,3,4]);

// Example 5
function sum() {
  var total = 0;

  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }

  return total;
}
var y = sum(1,2,3);
var x = sum.call(null, 1, 2, 3);

var things = [23,34,5356234,5467,4572];
var z = sum.apply(null, things);

console.log(y);
console.log(x);
console.log(z);


// Example 6
var b = function() {
  console.log(this);
}.bind(1);
b();

var zee3 = {
  func: b
};

zee3.func();


// Example 7
var zee4 = {
  someProp: 1,
  checkThis: function() {
    var checkOther = function() {
      console.log(this);
    }.bind(this)
    checkOther();
  }
};
zee4.checkThis();
