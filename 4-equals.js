"use strict";

/*
  What is the difference between == and ===?

  One checks for equality other checks for strict equality.
*/

console.log(0==0);
console.log(0===0);
console.log(0=='0'); // Trying to intelligently convert variables to equal types; type coercionr
console.log(0==='0');
