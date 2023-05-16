import { foo } from './foo';

test('should first', () => {
  // Arrange
  const value = 2;
  const expected = 4;
  // Act
  const result = foo(value);
  // Assert
  expect(result).toBe(expected);
});
