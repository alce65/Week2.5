export class Character {
  constructor(name, family, age) {
    this.tvShow = 'GOT';
    this.name = name;
    this.family = family;
    this.age = age;
    this.alive = 'alive';
  }

  isDead() {
    this.alive = 'Dead';
    return this;
  }
}
