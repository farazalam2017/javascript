'use strict';
//default parameter
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
//values Vs references
const flight = 'LH123';
const faraz = {
  name: 'farz alam',
  passport: 123456789,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH199';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;
/* call */
const person = {
  name: 'faraz alam',
};
function greet(greeting, punctuation) {
  console.log(`${greeting} ${punctuation}`);
}
greet.call(person, 'Hello', 'I');
/* apply */
greet.apply(person, ['Hello', 'I']);
/* bind */
const farazGreet = greet.bind(person, 'Hello', 'I');
farazGreet();
/* closure */
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
const counter = outer();
counter();
counter();
counter();
