"use strict";

/*
  What is an IIFE and why might you use it?

  Overwriting variables and populating the window/global scope.
 */

(function() {
  var thing = {'hello': 'main'};
  console.log("main: ", thing);
}());

var salary = "1000$";
(function () {
  console.log("Original salary was " + salary);
  var salary = "5000$";
  console.log("My New Salary " + salary);
})();
