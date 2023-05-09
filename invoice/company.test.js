import { Company } from './company';

describe('Given Company class', () => {
  describe('When we instantiate it', () => {
    test('should have a object with the properties of the class', () => {
      const company = new Company('Test', 'Sample address', '333', '22-Z');
      expect(company).toHaveProperty('name', 'Test');
      expect(company).toHaveProperty('address', 'Sample address');
      expect(company).toHaveProperty('phoneNumber', '333');
      expect(company.getNif()).toBe('22-Z');
    });
  });
});
