"use strict";

/*
  this in a browser would be the window.

  this is determined by the calling context, the way in which a function is called.

  this is very unstable in Javascript, using var self = this; stabilizes it.
 */

// Example 1
// Assigning zee to the window.
this.zee = 1;
console.log(this);

function checkThis() {
  console.log(this); // Window (global again)
}

// Example 2
var zee = {
  checkThis: function() {
    console.log(this); // Points to zee
  }
};
zee.checkThis();
// If we call checkThis() with zee, then this becomes zee
console.log(zee);

var func = zee.checkThis;
func(); // Global objects
// If no calling context, then by default Javascript sets this to global


// Example 3
var zee2 = {
  checkThis: function() {
    var self = this;
    console.log(this); // Points to zee2

    function checkOther() {
      self.moo = 1;
      console.log(self); // Global object
    }

    checkOther();
    console.log(self.moo);
    console.log(global.moo);
  }
};
zee2.checkThis();
