'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive')
*/

//Functions
/*
//defining the function
function logger() {
    console.log('My name is Austin');
}

//calling,running,invoking the function
logger();
logger();
logger();
logger();

// Function declaration
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(2, 3);
console.log(appleJuice);

//function expression (probably better to use than declaration)
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

// Arrow function
const calcAge2 = birthYear => 2037 - birthYear; // great for one-liner functions

const yearUntilRetiremente = birthYear => {
    return 65 - (2021 - birthYear);
}

console.log(yearUntilRetiremente(1993));
*/



/*
Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

/*
const calcAverage = function (score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas * 2) {
        console.log(`Dolphins win ${avgDolphins} to ${avgKoalas}!`);
    } else if (avgKoalas > avgDolphins * 2) {
        console.log(`Koalas win ${avgKoalas} to ${avgDolphins}!`);
    } else {
        console.log(`There is no winner (${avgDolphins} to ${avgKoalas}).`);
    }
}

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);
*/

/*
// Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jeremy";
console.log(friends[2]);

const firstName = 'Austin';
const lastName = 'Shaw'
const austin = [firstName, lastName, 2021 - 1993, friends];

console.log(austin);
console.log(austin[austin.length - 1]);

// Add elements
friends.push('George');
console.log(friends);

const newLength = friends.push('Rob');
console.log(newLength);

friends.unshift('Bailey'); // also returns length
console.log(friends);

// remove elements
friends.pop();
console.log(friends);

const badFriend = friends.pop();
console.log(badFriend);

const badFriend2 = friends.shift();
console.log(badFriend2);

// Checking for elements in string
console.log(friends.indexOf('Jeremy')); // returns -1 if element not in array

console.log(friends.includes('Jeff')); // returns bool

if (friends.includes('Peter')) {
    console.log('Peter is your friend')
} else {
    console.log('peter is not your friend')
}
*/


// Coding challenge #2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);
*/

/*
// Objects are just like Python dictionaries
const austin = {
    firstName: 'Austin',
    lastName: 'Shaw',
    birthYear: 1993,
    job: 'Engineer',

    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job}.`
    }
}

// console.log(austin.firstName);
// console.log(austin['lastName']);
// const nameKey = 'Name';
// console.log(austin['first' + nameKey]);

console.log(austin.calcAge());
console.log(austin.age);

console.log(austin.getSummary());
*/

/*
Coding challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    getbmi: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    getbmi: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

if (mark.getbmi() > john.getbmi()) {
    console.log(`${mark.fullName} has a higher BMI (${mark.bmi}) than ${john.fullName} (${john.bmi}).`)
} else {
    console.log(`${john.fullName} has a higher BMI (${john.bmi}) than ${mark.fullName} (${mark.bmi}).`)
}
*/

// For Loops
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights rep ${rep}.`)
}

const austin = [
    'Austin',
    'Shaw',
    2021 - 1993,
    'Engineer',
    ['Alex', 'Brian', 'Vinny']
]
const types = [];

for (let i = 0; i < austin.length; i++) {
    console.log(austin[i], typeof austin[i]);

    types[i] = typeof austin[i]; // Can also use types.push(typeof austin[i]);
}

console.log(types);

Continue skips the rest of the current iteration, break jumps out of the loop entirely.

Loop through backwards
for (let i = austin.length - 1; i >= 0; i--) {
    console.log(austin[i]);
}
*/

// While loop
/*
let rep = 1;
while (rep <= 10) {
    console.log(`Rep ${rep}.`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
*/

/*
Coding Challenge #4

Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
*/
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);