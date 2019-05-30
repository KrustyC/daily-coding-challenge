import findFirstMissingpositive from './day-6';

const couples = [
  [[3, 4, -1, 1], 2],
  [[1, 2, 0], 3],
  [[-1, 2, 24, -5, 0, 5, 1], 3],
  [[1, -1, -5, -3, 3, 4, 2, 8], 5],
  [[1, 8, 2, 4, 3, -1, -5, -3], 5],
];

describe('day-6', () => {
  test.each(couples)('.findFirstMissingpositive', (array, expected) => {
    expect(findFirstMissingpositive(array)).toEqual(expected);
  });
});
