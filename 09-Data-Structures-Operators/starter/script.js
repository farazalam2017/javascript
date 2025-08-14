'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      ` Order received ${this.order(
        starterIndex,
        mainIndex
      )} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`${ing1}, ${ing2} ${ing3} `);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};
//strings
const airline = 'Faraz Alam';
const plane = 'Amit Singh';
console.log(airline[0]);
console.log(plane[0]);
/* finding length */
console.log(airline.length);
console.log(plane.length);
/* finding index */
console.log(airline.indexOf('Alam'));
/* truncating strings */
console.log(airline.slice(4, 6));
console.log(plane.slice(-2));
/* To lower case */
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
/* replacments in strings */
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
/* includes(), startWith(), endWith() */
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Airb'));
/* split and join */
console.log('Jonas Schmedtmann'.split(' '));
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
/* padding */
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
/* Repeat */
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));
//map
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
//set
// const orderedSet = new Set(['A', 'A', 'B', 'B', 'C']);
// console.log(orderedSet);
// console.log(orderedSet.has('A'));
// orderedSet.add('D');
// console.log(orderedSet);
// const staff = ['A', 'B', 'C', 'D', 'E', 'A'];
// const uniqueStadff = [...new Set(staff)];
// console.log(uniqueStadff);
// //for of loop
// const arrNew = [1, 2, 3, 4, 5];
// for (const item of arrNew) console.log(item);
// for (const [i, el] of arrNew.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// //Logical assigment operator
// const res2 = {
//   name: 'faraz',
//   numGuests: 0,
// };
// const res3 = {
//   name: 'alam',
//   owner: 'raj',
// };
// res2.numGuests = res3.numGuests || 10;
// res2.numGuests = res2 || 10;
// console.log(res2);
// res2.owner = res2.owner && '<John>';
// //Nullish coalescing
// const alpha = 0;
// const beta = alpha || 10;
// console.log(beta);
// //short circuiting
// console.log(3 || 'str');
// console.log('' || 'str');
// console.log(0 && 'str');
// console.log(7 && 'str');
// //rest prameter and pattern
// const [x, y, ...others] = [1, 2, 3, 4, 5];
// console.log(x, y, others);
// const [pizza, risotto, ...others1] = [
//   ...restaurant.starterMenu,
//   ...restaurant.mainMenu,
// ];
// console.log(pizza, risotto, others1);
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');
// //spread
// const arr = [7, 8, 9];
// const newArray = [1, 2, ...arr];
// console.log(newArray);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu1);
// const str = 'faraz';
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);
// //destructuring objects
// restaurant.orderDelivery({
//   time: '23:20',
//   address: 'aplha beta',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'aplha beta',
//   starterIndex: 2,
// });
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// //
// let a = 111;
// let b = 222;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);
// //nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
//destructuring arrays
/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
const [x, y, z] = arr;
console.log(x, y, z);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k); */
