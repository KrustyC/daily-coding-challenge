import { car, cdr } from './day-5';

const cons = (a, b) => {
  return f => f(a, b);
};

describe('day-5 test', () => {
  test('car', () => {
    expect(car(cons(3, 4))).toBe(3);
  });

  test('cdr', () => {
    expect(cdr(cons(3, 4))).toBe(4);
  });
});
