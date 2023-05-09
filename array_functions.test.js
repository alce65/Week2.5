import { length } from './sample';

// TDD
// function length(a: array): number
// [] -> 0
// [1,2,4] -> 3
// [1, 'hola', true] -> 3
// [{}, {}] -> 2
// [[], []] -> 2
// ['', null, 0, -0, 0n, NaN] -> 6
// [undefined] -> 1
// [ 1, <9 empty items>, 2 ] -> 11

describe('Given length function', () => {
  describe('When it receives [] ', () => {
    test('should return 0', () => {
      const data = [];
      const expected = 0;
      const result = length(data);
      expect(result).toBe(expected);
    });
  });

  describe('When it receives [1,2,4] ', () => {
    test('should return 3', () => {
      const data = [1, 2, 4];
      const expected = 3;
      const result = length(data);
      expect(result).toBe(expected);
    });
  });

  describe('When it receives [1, hola, true] ', () => {
    test('should return 3', () => {
      const data = [1, 'hola', true];
      const expected = 3;
      const result = length(data);
      expect(result).toBe(expected);
    });
  });

  describe('When it receives [{}, {}] ', () => {
    test('should return 2', () => {
      const data = [{}, {}];
      const expected = 2;
      const result = length(data);
      expect(result).toBe(expected);
    });
  });

  describe('When it receives [[], []] ', () => {
    test('should return 2', () => {
      const data = [{}, {}];
      const expected = 2;
      const result = length(data);
      expect(result).toBe(expected);
    });
  });

  describe('When it receives ["", null, 0, -0, 0n, NaN] ', () => {
    test('should return 6', () => {
      const data = ['', null, 0, -0, 0n, NaN];
      const expected = 6;
      const result = length(data);
      expect(result).toBe(expected);
    });
  });

  describe('When it receives [undefined] ', () => {
    test('should return 2', () => {
      const data = [undefined];
      const expected = 1;
      const result = length(data);
      expect(result).toBe(expected);
    });
  });

  describe('When it receives [ 1, <9 empty items>, 2] ', () => {
    test('should return 11', () => {
      const data = [1];
      data[10] = 2;
      const expected = 11;
      const result = length(data);
      expect(result).toBe(expected);
    });
  });
});
