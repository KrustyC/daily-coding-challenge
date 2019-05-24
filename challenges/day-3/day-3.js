import Node from './Node';

const serializer = (node, output) => {
  if (!node) {
    return output.push('#');
  }

  output.push(node.val());
  serializer(node.left(), output);
  serializer(node.right(), output);
};

export const serialize = tree => {
  const vals = [];
  serializer(tree, vals);

  return vals.join(',');
};

export const deserialize = string => {
  const array = string.split(',');

  let i = 0;
  const decode = () => {
    if (i >= array.length || array[i] === '#') {
      return null;
    }

    return new Node(array[i], decode(++i), decode(++i));
  };

  return decode();
};
