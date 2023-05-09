/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */

export const length = (data) => {
  // No funciona para el caso [ 1, <9 empty items>, 2]
  // for (const key in data) {
  //   i++;
  // }

  let i = 0;
  for (const iterator of data) {
    i++;
  }

  // No funciona para el caso de [undefined]
  // let i = 0;
  // while (data[i] !== undefined) {
  //   i++;
  // }

  return i;
};

// Falsy
// false
// 0
// -0
// 0n
// NaN
// ''
// null
// undefined

// Truthy

const a = [undefined];
console.log(a.length);

const b = [1];
b[10] = 2;
console.log(b.length);
console.log(b);
