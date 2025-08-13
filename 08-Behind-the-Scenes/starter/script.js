'use strict';
//scoping
function calcAge(birthYear) {
  const age = 2300 - birthYear;
  console.log(firstName);
  return age;
}
const firstName = 'faraz'; //global
calcAge(2000);
//-----------------------------------**** deep Vs shallow copy
//shallow
let original = {
  name: 'Faraz',
  details: { age: 24, city: 'Ghazipur' },
};

let shallow = { ...original }; // or Object.assign({}, original)

// Change in nested object affects both
shallow.details.city = 'Delhi';

console.log(original.details.city); // "Delhi" (changed!)
//deep
let original1 = {
  name: 'Faraz',
  details: { age: 24, city: 'Ghazipur' },
};

// Deep copy using JSON (simple way)
let deep = JSON.parse(JSON.stringify(original));

deep.details.city = 'Delhi';

console.log(original1.details.city); // "Ghazipur" (unchanged)
// ---------------------------------&&&& ------------ method borrowing
let person1 = {
  name: 'Faraz',
  greet: function (city, country) {
    console.log(`Hi, I'm ${this.name} from ${city}, ${country}.`);
  },
};

let person2 = {
  name: 'Alam',
};

// Borrow method using call
person1.greet.call(person2, 'Delhi', 'India');
// Hi, I'm Alam from Delhi, India.

// Borrow method using apply
person1.greet.apply(person2, ['Lucknow', 'India']);
// Hi, I'm Alam from Lucknow, India.

// Borrow method using bind
let boundGreet = person1.greet.bind(person2, 'Mumbai', 'India');
boundGreet();
// Hi, I'm Alam from Mumbai, India.
