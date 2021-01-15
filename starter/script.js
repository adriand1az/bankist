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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTUREs

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];





// logic

/////////////////////////////////////////////////


// Displaying Transactions
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (movement, i) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1}  ${type}</div>
      <div class="movements__value">${movement}</div>
    </div>    
    `;


    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
};
displayMovements(account1.movements)




// Creating username variable to each user
const createUsername = function (users) {
  users.forEach(function (user) {
    user.username = (user.owner.toLowerCase().split(' ').map(name => name[0]).join(''))
  })
}
// Testing
createUsername(accounts)




// Creating a function to calculate Total
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov);

  labelBalance.textContent = `${balance}`
}
// Total
calcDisplayBalance(account1.movements)

const eurToUsd = 1.1;

// const totalDepositUsd = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov)


const calcDisplaySummary = function (movements) {
  // Labels income coming in
  const incomes = movements.filter(num => num > 0).reduce((acc, num) => acc + num)
  labelSumIn.innerText = `$${incomes}`;

  // labels money leaving account
  const out = movements.filter(num => num < 0).reduce((acc, num) => acc + num)
  labelSumOut.innerText = `$${Math.abs(out)}`

  const interest = movements.filter(num => num > 0)
    .map(deposit => deposit * 1.2 / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce(((acc, int) => acc + int));

  labelSumInterest.innerText = `$${interest}`;
}

calcDisplaySummary(account1.movements)

// Event listeners
btnLogin.addEventListener('click', function () {
  console.log('LOGIN')
})