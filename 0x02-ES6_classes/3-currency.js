export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(Codeval) {
    this._code = Codeval;
  }

  set name(Nameval) {
    this._name = Nameval;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
