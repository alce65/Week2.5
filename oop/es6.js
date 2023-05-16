// ES2015 / ES6

export class User {
  static count = 0;

  static addCount() {
    User.count++;
  }

  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    User.addCount();
  }

  greetings() {
    console.log(`Hola, soy ${this.name}`);
  }
}

const user3 = new User('Ramón', 34);
const user4 = new User('Rosa', 43);

console.log(user3, user4);

user3.greetings();

console.log(User.count);

class Alumno extends User {
  course;
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  greetings() {
    super.greetings();
    console.log(`Estudio ${this.course}`);
  }
}

const a1 = new Alumno('Raul', 22, 'JavaScript');
a1.greetings();
