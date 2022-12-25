import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newamount) {
    if (typeof amount === 'number') this._amount = newamount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newcurrency) {
    if (currency instanceof Currency) this._currency = newcurrency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
