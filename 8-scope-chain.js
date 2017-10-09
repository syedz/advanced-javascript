"use strict";

/*
  What is the scope chain?

  Variables are looked up the scope chain when being used.

  1. Own function scope,
  2. Outter function scope.
  3. And so on

  Scope chain is defined lexically - in the order in which the code is written
  in the file.
*/

// Example 1
// function foo() {
//   console.log(myvar);
// }
//
// function goo() {
//   var myvar = 1;
//   foo();
// }
//
// goo();

// Example 2
var myvar = 1;
function goo() {
  function foo() {
    console.log(myvar);
  }
  foo();
}

goo();
