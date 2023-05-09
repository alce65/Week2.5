/* eslint-disable no-proto */
const obj = {
  name: 'Pepe',
};

obj.age = 45;
delete obj.name;
console.log(obj);

const user = {
  name: 'Pepe',
  age: 22,
};

const human = {
  teeth: 32,
};

user.__proto__ = human;
// VALID way const user = Object.create(human)

console.log('Linea 21', user.teeth);

user.teeth = 30;

console.log('Linea 25', user.teeth);

const foo = () => {
  console.log('Soy foo');
};

foo.owner = 'alce65';

foo();
console.log(foo);
console.log(foo.prototype);
