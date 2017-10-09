/*
  Can place code in a strict coding environement. Code throws errors that would
  normally fail slightly.

  Older browser didn't support use strict, so they made it a string

  Using variable before it's assigned throws error in strict mode, but assigns
  variable to window object in non strict mode.

  Strict mode won't cause eval() to leak out of the eval block.
 */

"use strict";

var theVal = 0;
theVal = 1;

// eval("var a = 1");
// console.log(a);
