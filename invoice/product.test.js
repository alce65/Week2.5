import { Product } from './product';

describe('Given Product class', () => {
  describe('When we instantiate it', () => {
    test('should have a object with the properties of the class', () => {
      const product = new Product('Test', 33, 2);
      expect(product).toHaveProperty('description', 'Test');
      expect(product).toHaveProperty('price', 33);
      expect(product).toHaveProperty('quantity', 2);
    });
  });
});
