import { Character } from './character.js';

export class King extends Character {
  constructor(name, family, age, regnalYears) {
    super(name, family, age);
    this.regnalYears = regnalYears;
    this.speech = 'Vais a morir todos';
  }
}
