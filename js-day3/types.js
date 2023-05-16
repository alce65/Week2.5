/* eslint-disable dot-notation */

// Types in JS by VSC TS engine

let x;
x = 22;
console.log(typeof x);
x = 'Pepe';
console.log(typeof x);

const propertyName = 'rol';

// Object notations

const z = {};
z.name = 'Pepe';
z['age'] = 56;
z[propertyName] = 'admin';
z[1] = 'No se que es esto';
z[Symbol('')] = 'Symbol';

console.log(z);

// If else & implicit else

if (x) {
  // Cosas de x
} else {
  // Cosas de NO x
}

if (x) {
  // Cosas de x
  return x;
}
// Cosas de NO x
