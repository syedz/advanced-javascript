/*
  Primitive types are passed by value. Objects are passed by referance.

  If you change the value of a primitive type inside of a function, the changes
  won't affect variable in outer scope. You are passing a copy of a.

  If you change the object inside of a function, the changes affect the Objects
  wherever it is used. Can't change what object points to, only the property
  itself.
 */

"use strict";

// Primitive Type (value)
var a = 1;
function foo(a) {
  a = 2;
  console.log(a);
}

foo(a);
console.log(a);

// Object type (reference)
var b = {};
function foo2(b) {
  b.moo = 2;
  console.log(b);
}

foo2(b);
console.log(b);

// Object type (reference) example 2
// Can't change what object points to, only the property itself
var c = { 'moo': 'too' };
function foo3(c) {
  c = { 'too': 'moo' };
  console.log(c);
}

foo3(c);
console.log(c);
