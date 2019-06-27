import createSuperset from './day-37';

const expected = [
  [1, 2, 3],
  [],
  [1],
  [2],
  [3],
  [1, 2],
  [1, 3],
  [2, 3],
  [1, 2, 3],
];

test('it creates a proper superset', () => {
  const superset = createSuperset([1, 2, 3]);
  expect(superset.length).toBe(8);

  expected.forEach(subArray => {
    const isIncluded = superset.find(array => {
      return array.toString() === subArray.toString();
    });
    expect(isIncluded).toBeDefined();
  });
});
