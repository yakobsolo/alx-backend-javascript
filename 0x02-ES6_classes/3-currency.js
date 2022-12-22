export default class Currency {
  constructor(code, name) {
    if (typeof name !== 'string') throw TypeError('name must be a string');
    if (typeof code !== 'string') throw TypeError('name must be a string');
    this._code = code;
    this._name = name;
  }
  get code() {
    return this._code;
  }
  get name() {
    return this.name;
  }
  set code(codval) {
    if (typeof codval !== 'string') throw TypeError('name must be a string');
    this._code = codval
  }
  set name(nameval) {
    if (typeof nameval !== 'string') throw TypeError('name must be a string');	  
    this._name = nameval;
  }
  function displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
