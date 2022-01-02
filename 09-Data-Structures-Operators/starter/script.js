'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));

for (const flight of flights.split('+')) {
  // console.log(flight.split(';'));
  const [type, from, to, time] = flight.split(';');
  let output = `${type.startsWith('_Delayed') ? '🔴' : ' '}${type.replaceAll(
    '_',
    ' '
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`;
  // if (output.slice(0, 7) === 'Delayed') {
  //   output = '🔴 ' + output;
  // }
  console.log(output.padStart(47, ' '));
}

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}!`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
// Coding challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const lines = text.split('\n');
  let camelWord = '';
  let n = 1;
  for (const line of lines) {
    camelWord = (
      line.split('_')[0] +
      line.split('_')[1][0].toUpperCase() +
      line.split('_')[1].slice(1).toLocaleLowerCase()
    )
      .trim()
      .padEnd(20, ' ');
    console.log(camelWord + '✅'.repeat(n));
    n++;
  }
});
/*
console.log('a+very+nice+string'.split('+'));
const [firstName, lastName] = 'Austin Shaw'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('austin vandermeer shaw');

// Padding
const message = 'This is the message.';
console.log(message.padStart(25, '+'));
console.log('Austin'.padStart(25, '+'));

/*
const airline = 'JFK John F Kennedy';
const plane = 'A320';

console.log(plane[0]);
console.log(airline.length);

console.log(airline.indexOf('F'));
console.log(airline.lastIndexOf('F'));
console.log(airline.indexOf('John'));

console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😒');
  } else {
    console.log('You got lucky 🤑');
  }
};



checkMiddleSeat('11B');
checkMiddleSeat('15A');
checkMiddleSeat('8C');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'aUsTiN';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@austin.com';
const loginEmail = '   Hello@austin.com \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail === email);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320'));

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You cannot fly ⛔');
  } else {
    console.log('All set to fly! ✈️');
  }
};
checkBaggage('I have a laptop, my phone, and some snacks.');
checkBaggage('Socks and a camera');
checkBaggage('I have a GUN!');

/*
// Maps: iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct! 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert Object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = Number(prompt('Your answer?'));
console.log(question.get(answer === question.get('correct')));

// map to array
console.log([...question]);

/*
// Maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Austin'));
console.log(new Set('Austin Shaw'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Garlic Bread'));
ordersSet.add('Garlic Bread');
console.log(ordersSet);

console.log(ordersSet[0]); // No indices in sets, data cannot be extracted

for (const order of ordersSet) console.log(order); // It is iterable though

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffSet = new Set(staff);
const staffSetArray = [...new Set(staff)];
console.log(staffSet);
console.log(staffSetArray);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

/*
// Property names
const properties = Object.keys(openingHours);
console.log(properties);

for (const day of properties) {
  console.log(day);
}

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entries
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/*
// Without optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With optional chaining
console.log(restaurant.openingHours.mon?.open); // checks if mon exists
console.log(restaurant.openingHours?.mon?.open); // checks if opening hours and mon exist

for (const day of weekdays) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Optional chaining on methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

const users = [{ name: 'Austin', email: 'Austin@austin.com' }];

console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? 'User array empty');


console.log(restaurant);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


// Short circuiting && and ||
console.log(3 || 'Austin');
console.log('' || 'Austin');
console.log(true || 0);
console.log(null || undefined);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Austin');
console.log(7 && 'Austin');
console.log('Austin' && 'Bailey');

console.log('Austin' && 23 && null);

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushroom', 'Spinach');
}

restaurant.orderPizza &&
  restaurant.orderPizza('Mushrooms', 'Spinach', 'Banana peppers');

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Giorgio',
};

/*
// OR assignment
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10; // will save over a 0
// rest2.numGuests ||= 10;

// Nullish assignment
rest1.numGuests ??= 10; // will not save over 0
rest2.numGuests ??= 10;

// And assignment
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


// Rest Pattern (... on left side of assignment operator)
const arr = [1, 2, ...[3, 4]];
console.log(arr);

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
console.log(add(2, 3));
console.log(add(2, 3, 5, 7));
console.log(add(2, 4, 6, 7, 9, 6, 54, 3));

const x = [23, 6, 3];
console.log(add(...x));

restaurant.orderPizza('mushrooms', 'spinach', 'Pepperoni', 'Banana Peppers');

// Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // Spread operator does same as code above
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, but not objects
const str = 'Austin';
const letters = [...str, ' ', 'S'];
console.log(...letters);

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { ...restaurant, founder: 'Leonardo', foundIn: 1456 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring the array
const [x, y, z] = arr;
console.log(a, x, b, y, c, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainDish] = restaurant.order(2, 0);
console.log(starter, mainDish);

// Nested destructuring
const nested = [2, 3, [4, 5]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9]; // Sets default to 1
console.log(p, q, r);
*/

// Coding Challenges
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Sub'],
  [47, 'GOAL'],
  [61, 'Sub'],
  [64, 'Yellow'],
  [69, 'Red'],
  [70, 'Sub'],
  [72, 'Sub'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow'],
]);
/*
//Coding Challenge #3
const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const avgEventOccurrence = 90 / gameEvents.size;
console.log(
  `On average, a game event occurred every ${avgEventOccurrence} minutes.`
);

let half = '';
for (const [key, value] of gameEvents) {
  if (key <= 45) {
    half = '[FIRST HALF]';
  } else {
    half = '[SECOND HALF]';
  }
  console.log(`${half} ${key}: ${value}`);
}
/*
// Coding challenge #2
for (const [i, scorer] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${scorer}`);
}

const entries = Object.entries(game.odds);
console.log(entries);

let avgOdds = 0;
for (const [team, odd] of entries) {
  let teamName = game[team] ?? 'Draw';
  console.log(`${teamName} odds: ${odd}`);
  avgOdds += odd;
}

avgOdds = avgOdds / entries.length;
console.log(avgOdds);

const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

/*
//Coding Challenge #1
const [players1, players2] = game.players;

const [bayernGK, ...bayernFieldPlayers] = players1;
const [borGK, ...borFieldPlayers] = players2;

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1Odds);
// console.log(drawOdds);
// console.log(team2odds);

const printGoals = function (...scorers) {
  console.log(scorers.length);
  for (let i = 0; i < scorers.length; i++) {
    console.log(scorers[i]);
  }
};

printGoals('Davies', 'Mueller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
printGoals('Austin');

team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
*/
