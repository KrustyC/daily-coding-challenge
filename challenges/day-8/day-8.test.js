import Node from './Node';
import countUniVal from './day-8';

describe('day-8', () => {
  test('count universal tree - test 1', () => {
    const tree = new Node(
      0,
      new Node(1),
      new Node(0, new Node(1, new Node(1), new Node(1)), new Node(0))
    );
    expect(countUniVal(tree)).toBe(5);
  });

  test('count universal tree - test 2', () => {
    const tree = new Node(
      'a',
      new Node('a'),
      new Node('a', new Node('a'), new Node('a', new Node('a')))
    );
    expect(countUniVal(tree)).toBe(6);
  });

  test('count universal tree - test 3', () => {
    const tree = new Node(
      'a',
      new Node('c'),
      new Node('b', new Node('b'), new Node('b', new Node('b')))
    );
    expect(countUniVal(tree)).toBe(5);
  });
});
