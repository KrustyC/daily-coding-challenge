import productOfOtherNumbers from './day-2';

const couples = [
  [[1, 2, 3, 4, 5], [120, 60, 40, 30, 24]],
  [[3, 2, 1], [2, 3, 6]],
];

describe('day-2', () => {
  test.each(couples)('.productOfOtherNumbers(%i, %i)', (array, expected) => {
    expect(productOfOtherNumbers(array)).toEqual(expected);
  });
});
