/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */

const user1 = {
  name: 'Pepe',
  age: 22,
  greetings: function () {
    console.log(`Hola, soy ${this.name}`);
  },
};

const user2 = {
  name: 'Luisa',
  age: 24,
  greetings: function () {
    console.log(`Hola, soy ${this.name}`);
  },
};

function User(name, age) {
  this.name = name;
  this.age = age;
  User.addCount();
}

User.prototype.greetings = function () {
  console.log(`Hola, soy ${this.name}`);
};

User.count = 0;
User.addCount = function () {
  User.count++;
};

const user3 = new User('Ramón', 34);
const user4 = new User('Rosa', 43);

console.log(user1, user2, user3, user4);

user3.greetings();

console.log(User.count);

Object.is();
Array.isArray();
