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

const cases = [
  { data: [], value: 0 },
  { data: [1, 2, 4], value: 3 },
  { data: [1, 'hola', true], value: 3 },
  { data: [{}, {}], value: 2 },
  { data: [[], []], value: 2 },
  { data: ['', null, 0, -0, 0n, NaN], value: 6 },
  { data: [undefined], value: 1 },
  { data: [1], value: 11 },
];
cases[7].data[10] = 2;

describe('Given length function', () => {
  describe.each(cases)('When it receives $data ', ({ data, value }) => {
    test(`should return ${value}`, () => {
      const items = data;
      const expected = value;
      const result = length(items);
      expect(result).toBe(expected);
    });
  });
});
