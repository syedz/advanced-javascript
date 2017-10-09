"use strict";
/*
  What are the different scopes in javascript?

  1. Global scope
  2. Function scope

  Javascript does not have block level scopes.
 */

var zee = 1;

global.zee = 1;
console.log(global.zee);

function moo() {
  var foo = 1;
  console.log(foo);
}

moo();

// Javascript does not have block level scopes
for (var i = 0; i < 5; i++) {
  var j = 5; // Declared in the global scope
}
console.log(j);
