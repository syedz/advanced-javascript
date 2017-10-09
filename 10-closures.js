"use strict";

/*
  What are function closures?

  Normally when a function finishes executing, the variables within that function
  scope would be deleted. However, when a function returns a function, the function
  that is returned keeps a reference to any variables that it needs to execute.
 */

function sayHello(name){
  var text = 'Hello ' + name;
  return function() {
    console.log(text);
  };
}

var sayZee = sayHello('Zee');
sayZee();

/*
  When the closure is created, it doesn't get a copy of i, it points to the
  actual value of i in the outer scope. By the time we call i, the loop has been
  exhausted, and i is then 10. Closures point to the current value of whatever
  variables are used in it's function body, the current value.
 */

var foo = [];
for (var i = 0; i < 10; i++) {
  foo[i] = function() { return i; }
}

console.log(foo[0]());
console.log(foo[1]());
console.log(foo[2]());


var foo2 = [];
for (var i = 0; i < 10; i++) {
  (function(y) {
    foo2[y] = function() { return y; }
  }(i));
}

console.log(foo2[0]());
console.log(foo2[1]());
console.log(foo2[2]());
