import { Character } from './char.js';

describe('Given Character class', () => {
  const character = new Character('name', 'family', 'age');
  describe('When we instantiate it', () => {
    test('Then should have an object with the properties of the class', () => {
      expect(character).toHaveProperty('tvShow', 'GOT');
      expect(character).toHaveProperty('name', 'name');
      expect(character).toHaveProperty('family', 'family');
      expect(character).toHaveProperty('age', 'age');
      expect(character).toHaveProperty('alive', 'alive');
    });
  });
  describe('When we call isDead ', () => {
    test("Then should return the character as 'Dead'", () => {
      expect(character.isDead()).toHaveProperty('alive', 'Dead');
    });
  });
});
