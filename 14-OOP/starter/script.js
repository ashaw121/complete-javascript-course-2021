'use strict';

// ---------- Lecture ----------
////////////////////////////////

/*
// Public Fields
// Private Fields
// Public Methods
// Private Methods

// More Class Examples

class Account {
  // Public fields
  locale = navigator.language;

  // Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property, just a convention but doesn't make it actually private
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account ${this.owner}!`);
  }

  // Public Methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
      return this;
    }
  }

  static helper() {
    console.log('This is the help method.');
  }

  //Private Methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Austin', 'USD', 1234);
acc1.deposit(300);
acc1.withdraw(150);
console.log(acc1);
console.log(acc1.getMovements());
acc1.requestLoan(100);

// Need to return this for each method
acc1.deposit(500).deposit(200).requestLoan(100).withdraw(400);
console.log(acc1.getMovements());
// console.log(acc1.#movements); Does not work because this is private now

/*
// Inheritance between classes, Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2014, 'Computer Science');
console.log(jay);

/*
// ES6 Classes Inheritance

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hi, my name is ${this.fullName}.`);
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('Not a full name!');
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log(`Hey there 👋`);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const martha = new StudentCl('Martha Jones', 2021, 'Philosophy');
console.log(martha);
martha.introduce();

/*
// Inheritance between Classes
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(
    `Hi, my name is ${this.firstName} and I am taking the ${this.course} course.`
  );
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(mike instanceof Person);
console.log(mike instanceof Student);
console.log(mike.calcAge());

/*
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1988;
steven.calcAge();

console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1999);

/*
// Static methods
console.log(Array.from(document.querySelectorAll('h1')));

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.hey = function () {
  console.log('Hey!');
  console.log(this);
};

Person.hey();

const austin = new Person('Austin', 1993);
// austin.hey(); // does not work, hey was added to Person, not Person.prototype
/*
// Getters and Setters
const account = {
  owner: 'Austin',
  movements: [100, 200, -300, 200],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 5000;
console.log(account.latest);

/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hi, my name is ${this.fullName}.`);
  }
// Set property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('Not a full name!')
  }

  get fullName() {
    return this._fullName;
  }
}

const jess = new PersonCl('Jess', 1984);
console.log(jess);
jess.calcAge();

console.log(jess.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hi, my name is ${this.firstName}.`);
// };

jess.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

/*
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

console.log(austin.__proto__);
console.log(austin.__proto__.__proto__);
console.log(austin.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [1, 2, 3, 3, 3, 4, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.log(h1.__proto__);
*/

// ---------- Challenges ----------
///////////////////////////////////

/*
// Challenge #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Accelerated to ${this.speed} MPH`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`Braked to ${this.speed} MPH`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw);
console.log(mercedes);

bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.accelerate();
bmw.accelerate();

mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.accelerate();
mercedes.accelerate();


// Challenge #2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
  }

  brake() {
    this.speed -= 5;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const volvo = new CarCl('Volvo', 75);
console.log(volvo.speed);
console.log(volvo.speedUS);

volvo.accelerate();
console.log(volvo.speed);
console.log(volvo.speedUS);

volvo.accelerate();
console.log(volvo.speed);
console.log(volvo.speedUS);

volvo.brake();
console.log(volvo.speed);
console.log(volvo.speedUS);

volvo.speedUS = 80;
console.log(volvo.speed);
console.log(volvo.speedUS);


// Coding Challenge #3
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Accelerated to ${this.speed} MPH`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`Braked to ${this.speed} MPH`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

// EV.prototype.constructor = EV;

const tesla = new EV('Tesla', 120, 23);
console.log(tesla.make, tesla.speed, tesla.charge);
console.log(tesla);

tesla.chargeBattery(80);
console.log(tesla.charge);
tesla.accelerate();
console.log(tesla);
tesla.brake();
*/

// Coding challenge #4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`Braked to ${this.speed}km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);

    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Battery charged to ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(`Accelerated to ${this.speed}km/h, charge at ${this.#charge}%`);
    return this;
  }
}

const tesla = new EVCl('Tesla', 150, 65);
console.log(tesla);

tesla.chargeBattery(85).accelerate().brake().brake();
