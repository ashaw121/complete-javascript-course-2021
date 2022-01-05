'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `€${balance}`;
};

createUsernames(accounts);
displayMovements(account1.movements);
calcPrintBalance(account1.movements);

// Coding Challenge #2
const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map(function (age, i) {
    if (age <= 2) {
      return age * 2;
    } else {
      return 16 + age * 4;
    }
  });
  const humanAgesOver18 = humanAges.filter(age => age > 18);
  const avgHumanAge =
    humanAgesOver18.reduce((acc, cur) => acc + cur, 0) / humanAgesOver18.length;

  return avgHumanAge;
};
const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];
console.log(calcAverageHumanAge(testData1));
console.log(calcAverageHumanAge(testData2));

/*
// Reduce method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Get maximum value
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(max);

// Accumulator is like a snow ball
const balance = movements.reduce((acc, cur, i) => acc + cur, 0);
console.log(balance);

/*
// Filter
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
/*
// Map
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUSD = 1.1;

const movementsUSD = movements.map(mov => mov * euroToUSD);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUSD);

console.log(movementsUSDfor);

const movementsDescription = movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${
    mov > 0 ? mov : Math.abs(mov)
  }`;
});
console.log(movementsDescription);
/*
//Coding Challenge #1
const checkDogs = function (dogsJulia, dogsKate) {
  const realDogsJulia = dogsJulia.slice(1, -2);
  const allDogs = [...realDogsJulia, ...dogsKate];
  allDogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog ${i + 1} is an adult dog, and is ${dog} years old`);
    } else {
      console.log(`Dog ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
// forEach with Maps and Sets -------
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  // key for set is same as value
  console.log(`${key}: ${value}`);
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
// foreach -------
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Transaction ${i + 1}: Deposited ${movement}`);
  } else {
    console.log(`Transaction ${i + 1}: Withdrew ${Math.abs(movement)}`);
  }
}

console.log(''.padStart(20, '-'));

// Always needs to be current element, current index, and entire array
movements.forEach(function (mov, i, ar) {
  if (mov > 0) {
    console.log(`Transaction ${i + 1}: Deposited ${mov}`);
  } else {
    console.log(`Transaction ${i + 1}: Withdrew ${Math.abs(mov)}`);
  }
});
// forEach cannot break from for loop, will always finish entire loop

/*
// at method -------
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); // Easiest way to get same outcome

console.log('Austin'.at(0));

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));

// console.log(arr.splice(2)); // splice pops from array, unlike slice
// console.log(arr.splice(1, 2));
// console.log(arr);

// Reverse
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // mutates array
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters); // sames as [...arr + ...arr2]

// JOIN
console.log(letters.join('-'));
/*
 */
