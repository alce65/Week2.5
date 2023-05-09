export class Company {
  name;
  address;
  phoneNumber;
  #nif;
  constructor(name, address, phoneNumber, nif) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.#nif = nif;
  }

  getNif() {
    return this.#nif;
  }

  print() {
    return `${this.name} - ${this.#nif}
        -------------
        ${this.address} - ${this.phoneNumber}`;
  }
}
