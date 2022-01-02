/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'George';
console.log(firstName);
console.log(firstName);
console.log(firstName);
// console.log(firstName);

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
*/

// Variable Exercise
/*
let country = 'United States';
let continent = 'North America';
let population = 329.5;

console.log(country);
console.log(continent);
console.log(population);
*/

/*
true;
console.log(true);
let bool_value = false;
console.log(bool_value);

console.log(typeof true);
console.log(typeof bool_value);
console.log(typeof 23);
console.log(typeof 'Austin');

bool_value = 'BOOLEAN'
console.log(bool_value)
console.log(typeof bool_value);

let year;
console.log(year);
console.log(typeof year)

year = 1991;
console.log(year);
console.log(typeof year)
*/

// Datatype Exercise
/*
let country = 'United States';
let continent = 'North America';
let population = 329.5;
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

/*
let age = 30;
age = 31;

const birthYear = 1993;
// birthYear = 1994;
// const job;

// var is legacy version of let
var job = 'Programmer';
job = 'Engineer';

lastName = 'Shaw'; // Do not need to use let or const, but you always should declare it
*/

// let, const, var Exercises
/*
const language = 'English';
const isIsland = false;
const continent = 'North America';
const country = 'United States';
let population = 329.5

language = 'Spanish'
*/

/*
const year = 2069
const ageAustin = year - 1993;
const ageBailey = year - 1807;
console.log(ageAustin, ageBailey);

console.log(ageAustin * 2, ageBailey ** 4, ageBailey / 11)

const firstName = 'Austin'
const lastName = 'Shaw'

console.log(firstName + ' ' + lastName)

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x)

console.log(ageAustin < ageBailey)
console.log(ageBailey <= ageAustin)
*/

// Basic Operators Exercises
/*
const language = 'English';
const isIsland = false;
const continent = 'North America';
const country = 'United States';
let population = 329.5

population /= 2;
population++;
console.log(population);
population = 329.5;
console.log(population > 6);
console.log(population < 33);

let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);
*/

/*
const year = 2069
const ageAustin = year - 1993;
const ageBailey = year - 1807;

console.log(year - 1991 > year - 2018);

let x, y;

x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

let avgAge = (ageAustin + ageBailey) / 2;
console.log(avgAge);
*/

/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / (markHeight ** 2);
johnBMI = johnMass / (johnHeight ** 2);

markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);
*/

/*
const firstName = 'Austin';
const job = 'Engineer';
const birthYear = 1993;
const year = 2021;

const austin = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job;

console.log(austin);

const austinNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(austinNew)

console.log(`First line \n\
Second Line \n\
Third Line`)

console.log(`first line
Second Line
Third Line`)
*/

// Strings and template literals exercises
/*
const language = 'English';
const isIsland = false;
const continent = 'North America';
const country = 'United States';
let population = 329.5

let description = `${country} is in ${continent} and has a population of ${population} million ${language} speakers.`

console.log(description)
*/
/*
const age = 15;

if (age >= 18) {
   console.log('Sarah can start driving license.');
} else {
   const yearsLeft = 18 - age;
   console.log(`Sarah needs to wait ${yearsLeft} more years.`);
}

let century;
const birthYear = 1993;
if (birthYear <= 2000) {
   century = 20
} else {
   century = 21
}
console.log(century)
*/

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/

/*
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}
*/

/*
// Type conversion
const inputYear = '1991';
const numInputYear = Number(inputYear)
console.log(numInputYear + 18);
let strInputYear = String(numInputYear);
console.log(strInputYear);

// Type coercion
console.log('I am ' + 28 + ' years old'); // automatically coerces num to str
console.log('23' - '10' - 5) // Coerces strs to num
console.log('1' + 1 - 1) // plus operator coerces to str, not to num, because concatenation
*/
// Type coercion exercises, guess the output
/*
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
*/

// Five Falsey Values
// 0, '', undefined, null, NaN

// Any other value is Truthy

/*
=== vs ==
=== is strict, does not perform type coercion. 18 === '18' is false;
== is loose, will perform type coercion if necessary. 18 == '18' is true;
The loose equality operator has weird rules that are hard to understand
It is best to only use strict the equality operator.

Same as above for !== vs !=
*/

/*
const favorite = Number(prompt('What is your favorite number?'));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 18) console.log('Yay')
*/

// Equality Operators Exercises
/*
const numNeighbors = Number(prompt('How many neighbor countries does your country have?'));

if (numNeighbors === 1) {
   console.log('Only 1 border!');
} else if (numNeighbors > 1) {
   console.log('More than 1 border');
} else {
   console.log('No borders');
}
*/

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// Coding Challenge #3
/*
const avgD = (97 + 112 + 101) / 3;
const avgK = (109 + 95 + 106) / 3;
console.log(avgD);
console.log(avgK);

if (avgD > avgK && avgD >= 100) {
   console.log('Dolphins Win!');
} else if (avgD < avgK && avgK >= 100) {
   console.log('Koalas Win!');
} else if (avgD === avgK && avgD >= 100) {
   console.log('It is a draw.');
} else {
   console.log('Minimum score of 100 not reached, no winner.')
}
*/

/*
const day = 'monday';

switch (day) {
   case 'monday':
      console.log('Plan my course structure.');
      console.log('Go to coding meetup.');
      break;
   case 'tuesday':
      console.log('Prepare theory videos.');
      break;
   case 'wednesday':
   case 'thursday':
      console.log('Write code.');
      break;
   case 'friday':
   case 'saturday':
   case 'sunday':
      console.log('No work!');
      break;
   default:
      console.log('Not a valid day')
}
*/

// Ternary Operator
/*
const age = 13;
age >= 18 ? console.log('I can drink wine') :
   console.log("water for me...")

const drink = age >= 18 ? 'wine' : "water";
*/

// Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/

/*
const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was $${bill}, the tip was $${tip}, and the total was $${bill + tip}`);
*/
