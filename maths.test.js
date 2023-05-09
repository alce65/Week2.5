import { divide } from './maths';

test('should first', () => {
  const a = 12;
  const b = 2;
  const expected = 6;
  expect(divide(a, b)).toBe(expected);
});

test('should first', () => {
  const a = 12;
  const b = 0;
  const error = new Error('No se puede dividir por 0');
  expect(() => divide(a, b)).toThrowError(error);
});
