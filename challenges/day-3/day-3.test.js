import { serialize, deserialize } from './day-3';
import Node from './Node';

describe('day-3 test 1', () => {
  const node = new Node(
    'root',
    new Node('left', new Node('left.left')),
    new Node('right')
  );
  test('serialize-deserialize', () => {
    const serializedDeserialized = deserialize(serialize(node));
    // console.log(serializedDeserialized);
    expect(
      serializedDeserialized
        .left()
        .left()
        .val()
    ).toBe('left.left');

    expect(serializedDeserialized.right().val()).toBe('right');
  });

  test('idempotence', () => {
    const idempotentSerialization = serialize(deserialize(serialize(node)));
    expect(idempotentSerialization).toBe(serialize(node));
  });
});

describe('day-3 test 2', () => {
  const node = new Node(
    1,
    new Node(2, new Node(6)),
    new Node(3, new Node(4), new Node(5))
  );
  test('serialize-deserialize', () => {
    const serializedDeserialized = deserialize(serialize(node));
    // console.log(serializedDeserialized);
    expect(
      parseInt(
        serializedDeserialized
          .left()
          .left()
          .val(),
        10
      )
    ).toEqual(6);

    expect(parseInt(serializedDeserialized.right().val(), 10)).toBe(3);
  });

  test.only('idempotence', () => {
    const idempotentSerialization = serialize(deserialize(serialize(node)));
    expect(idempotentSerialization).toBe(serialize(node));
  });
});
