import findKSum from './day-1';

const couples = [
  [[10, 15, 3, 7], 17, true],
  [[10, 15, 3, 7], 23, false],
  [[10, 15, 3, 7], 25, true],
  [[10, 15, 3, 7, 3, 8, 42, 6], 54, false],
  [[10, 15, 3, 7, 3, 8, 42, 6], 50, true],
];

test.each(couples)('.findKSum(%i, %i)', (array, k, expected) => {
  expect(findKSum(array, k)).toBe(expected);
});
