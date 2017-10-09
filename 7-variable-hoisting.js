"use strict";

/*
  What is variable hoisting?

  Automatic hoisting to the top of the enclosing scope.
  Will also hoist functions
*/

console.log(a);
var a = 1; // Split out and hoisted to the top

function foo() {
  console.log(b);
  var b = 1; // Split out and hoisted to the top
}
foo();

moo();
function moo() {
  console.log(b);
  var b = 1; // Split out and hoisted to the top
}

foo2();
var foo2 = function() {
  console.log(b);
  var b = 1; // Split out and hoisted to the top
}
