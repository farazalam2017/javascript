//assigments
let country = "India";
let population = 1.4; // in billions
let continent = "Asia";
console.log(country, population, continent);
let island = false;
let language;
console.log(typeof country); // string
console.log(typeof population); // number
console.log(typeof continent); // string
console.log(typeof island); // boolean
language = "Hindi";
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
console.log(population < 33 && continent === "Asia");
const description = `${country} is in ${continent}, and its population is ${population} billion.`;
console.log(description);
if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${33 - population} billion below average.`
  );
}
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> 617
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143
const numNeighbors = Number(
  prompt("How many neighbor countries does your country have?")
);
if (numNeighbors === 1) {
  console.log("Only 1 border!");
} else if (numNeighbors > 1) {
  console.log("More than 1 border!");
} else {
  console.log("No borders!");
}
language === "Mandarin"
  ? console.log("You speak Mandarin!")
  : console.log("You don't speak Mandarin!");
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
