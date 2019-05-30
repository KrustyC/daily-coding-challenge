export default class Node {
  constructor(val, left = null, right = null) {
    this._val = val;
    this._left = left;
    this._right = right;
  }

  val() {
    return this._val;
  }

  left() {
    return this._left;
  }

  right() {
    return this._right;
  }
}
