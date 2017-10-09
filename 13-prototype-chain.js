/*
  What is the prototype chain?

  Every object has a prototype. When looking for an object, will look within
  the object first, then the prototype, it will continue on until it ends.
 */

var animal = {
  kind: 'human'
};
console.log(animal);

// var zee = {};
// zee.__proto__ = animal;

var zee = Object.create(animal, {food: {value: "mango"}}); // More supported

console.log(zee.food);
console.log(zee.kind);
console.log(animal.isPrototypeOf(zee));

// Prototypes get updated automatically
// animal.kind = 'igloo';
// console.log(zee.kind);

zee.kind = 'igloo';
console.log(zee.kind);
console.log(animal.kind);
