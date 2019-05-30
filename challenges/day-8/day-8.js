const helper = root => {
  if (root === null) {
    return [0, true];
  }

  const [leftCount, isLeftUnival] = helper(root.left());
  const [rightCount, isRightUnival] = helper(root.right());
  const totalCount = leftCount + rightCount;

  if (isLeftUnival && isRightUnival) {
    if (root.left() !== null && root.val() !== root.left().val()) {
      return [totalCount, false];
    }

    if (root.right() !== null && root.val() !== root.right().val()) {
      return [totalCount, false];
    }

    return [totalCount + 1, true];
  }

  return [totalCount, false];
};

const countUniVal = root => {
  const [count] = helper(root);
  return count;
};

export default countUniVal;
