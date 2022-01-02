'use strict';

/*
// Coding Challenge #1
const poll = {
  question: 'What is your favorite programming language',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  displayResults: function (type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else {
      console.log(this.answers);
    }
  },
  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}\n(Write option number)`
      )
    );
    console.log(answer);
    if (answer >= 0 && answer <= 3) {
      this.answers[answer] += 1;
    } else {
      alert('Not a valid input! ⛔');
    }
    this.displayResults('string');
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];
poll.displayResults.call({ answers: testData1 }, 'string');
poll.displayResults.call({ answers: testData2 }, 'string');
/*
// Call and Apply Methods
const lufthansa = {
  airline: ' Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightnum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightnum}`, name });
  },
};

lufthansa.book(239, 'Austin Shaw');
lufthansa.book(625, 'Bailey Cohen');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// Call Data
const book = lufthansa.book;

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 555, 'Mike Gordon');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

const flightData2 = [169, 'Trey Anastasio'];
book.call(swiss, ...flightData2);
console.log(swiss);

// Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(181, 'Steven Williams');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Austin Shaw');
bookEW23('Martha Stewart');
console.log(eurowings);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); // Sets rate to 23%
// console.log(addVAT(100));

//Challenge - recreate addVat with function returning other function
const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT = addTax(0.23);
console.log(addVAT(100));

/*
// Functions returning functions -------
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Austin');
greeterHey('Jonas');
greetArr('Hello')('Jacob');

/*
// Functions calling functions -------
const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(" ");
  return [firstWord.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWord);
transformer("Austin is a nice guy", oneWord);

const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);

["Austin", "Jonas", "Bailey"].forEach(high5);
*/
