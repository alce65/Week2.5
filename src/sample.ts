/* eslint-disable object-shorthand */
/* eslint-disable prefer-const */
/* eslint-disable capitalized-comments */
/* eslint-disable no-unused-vars */
// TS: Tipado estático - fuerte
// JS: Tipado dinámico - débil

import { Alumno } from './oop.js';

// Inferencia de tipos

let x = 22;
console.log('Hola TS', x);

// x = 'Pepe'; // Error de tipos
console.log('Hola TS', x);

// Anotación de tipos

let y: boolean;
let z: string;

// y = 23 // Error de tipos
y = true;
z = '';

console.log(z);

// Tipos primitivos

// Tipos y funciones

const suma = (a: number, b: number): number => a + b;

suma(45, 78);

const sumaHippy = (a: number | string, b: number | string): number | string => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }

  return 'Invalid combination';
};

// Tipos y objetos

const data: string[] = [];
data.push('9');
const numbers: Array<number> = [];
numbers.push(9);

const obj: { [key: string]: unknown } = {};
obj.name = 'Pepe';
obj.age = 12;
obj.isFoo = true;

// Definición de tipos

// Semántica

type Name = string;

type Id = number | string;

let id: Id;

id = 12;
id = '123432';

type User = {
  id: Id;
  name: Name;
  email: string;
  passwd: string;
};

interface UserI {
  id: Id;
  name: Name;
  email: string;
  passwd: string;
}

const user1: User = {
  id: 123,
  name: 'Pepe',
  email: '',
  passwd: '',
};

// Tipado estructural

const a1 = new Alumno('', 23, '');
let a2: Alumno;

a2 = {
  id: '',
  name: '',
  age: 0,
  course: '',
  greetings: () => {},
  getId: () => '',
};

// Narrowing

class Fish {
  swim() {}
  eat() {}
}
class Bird {
  name!: string;
  fly() {}
  eat() {}
}

function foo(animal: Fish | Bird) {
  console.log(animal);

  animal.eat();

  // if(animal instanceof Bird) {
  //   animal.fly()
  //   return animal
  // }

  // animal.swim()

  if ('name' in animal) {
    animal.fly();
    return animal;
  }

  animal.swim();
}

foo(new Bird());
foo(new Fish());

let rol: 'user' | 'admin';

rol = 'user';
rol = 'admin';

const user: { rol: 'user' | 'admin' } = {
  rol: 'user',
} as const;

user.rol = 'admin';

function foo2(animal: Fish | Bird) {
  (animal as Bird).fly();
}

foo2(new Bird());

// Document Object Model

const element = document.querySelector('.foo') as HTMLElement;
const formElement = document.querySelector('.form1') as HTMLFormElement;

// element.elements

// formElement.elements

const element2 = document.querySelector('.foo')!;
