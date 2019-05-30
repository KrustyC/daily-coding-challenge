const univalHelper = (root, value) => {
  if (root === null) {
    return true;
  }

  if (root.val() === value) {
    return (
      univalHelper(root.left(), value) && univalHelper(root.right(), value)
    );
  }

  return false;
};

const isUnival = root => univalHelper(root, root.val());

const countUniVal = node => {
  if (node === null) {
    return 0;
  }

  const left = countUniVal(node.left());
  const right = countUniVal(node.right());

  return isUnival(node) ? 1 + left + right : left + right;
};

export default countUniVal;
