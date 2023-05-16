interface Named {
  name: string;
}

interface WithID {
  id: string;
  getId: () => string;
}

export class User implements Named, WithID {
  static count = 0;

  static addCount() {
    User.count++;
  }

  id: string;
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.id = '';
    this.name = name;
    this.age = age;
    User.addCount();
  }

  greetings() {
    console.log(`Hola, soy ${this.name}`);
  }

  getId() {
    return this.id;
  }
}

const user3 = new User('Ramón', 34);
const user4 = new User('Rosa', 43);

console.log(user3, user4);

user3.greetings();

console.log(User.count);

export class Alumno extends User {
  course: string;
  constructor(name: string, age: number, course: string) {
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
