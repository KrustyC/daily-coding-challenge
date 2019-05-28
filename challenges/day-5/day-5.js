export const car = pair => {
  const left = (a, b) => a;
  return pair(left);
};

export const cdr = pair => {
  const right = (a, b) => b;
  return pair(right);
};
