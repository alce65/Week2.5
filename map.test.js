import { newMap } from './map';

describe('Given map function', () => {
  describe('When in receive [1,2,3] without callback', () => {
    test('should throw an error', () => {
      const data = [1, 2, 3];
      const expectedError = new Error('Not callback provided');
      expect(() => newMap(data)).toThrowError(expectedError);
    });
  });
});
