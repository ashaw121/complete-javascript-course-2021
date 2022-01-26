'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Do not create methods inside constructor
};

const austin = new Person('Austin', 1993);
const jonas = new Person('Jonas', 1991);
const bailey = new Person('Bailey', 1994);
const brian = '';
console.log(austin, jonas, bailey);

console.log(austin instanceof Person);
console.log(brian instanceof Person);

// 1. New empty object created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

austin.calcAge();
