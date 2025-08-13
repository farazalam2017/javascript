// Remember, we're gonna use strict mode in all scripts now!
"use strict";
//using debugger
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: Number(prompt("Degree celsius")),
    value: 10,
  };
  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

////////////////////
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    // debugger;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
