import { King } from './king.js';

const kPepe = new King('Pepe', 'Pepes', 34, 6);

console.log(kPepe.status);
kPepe.goDie();
console.log(kPepe.status);
console.log(kPepe.communicate());
