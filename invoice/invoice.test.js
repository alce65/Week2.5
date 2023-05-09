import { Company } from './company';
import { Invoice } from './invoice';
import { Product } from './product';

describe('Given Invoice class', () => {
  const myCompany = new Company('Test', 'Sample address', '333', '22-Z');
  const myClient = new Company(
    'Test client',
    'Sample address client',
    '555',
    '22-R'
  );
  const products = [new Product('Test', 33, 2)];

  const invoice = new Invoice(myCompany, myClient, products, 'contado');

  describe('When we instantiate it', () => {
    test('should have a object with the properties of the class', () => {
      expect(invoice).toHaveProperty('company', myCompany);
      expect(invoice).toHaveProperty('client', myClient);
      expect(invoice).toHaveProperty('products', products);
      expect(invoice).toHaveProperty('total');
      expect(invoice).toHaveProperty('ivaType', 21);
      expect(invoice).toHaveProperty('payForm', 'contado');
    });
  });

  describe('When i call the method ....', () => {
    test('should first', () => {
      const expected = 33 * 2 * 1.21;
      expect(invoice.calcTotal()).toBe(expected);
    });
  });
});
