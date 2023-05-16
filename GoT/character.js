export class Character {
  static serie = 'GOT';

  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = 'alive';
    this.speech = '';
  }

  goDie() {
    this.status = 'dead';
  }

  communicate() {
    return this.status === 'alive' ? this.speech : 'Estoy muerto';
  }
}
