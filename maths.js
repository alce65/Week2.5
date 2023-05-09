export const divide = (a, b) => {
  if (b === 0) throw new Error('No se puede dividir por 0');
  return a / b;
};
