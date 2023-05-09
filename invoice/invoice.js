/* eslint-disable max-params */
export class Invoice {
  company;
  client;
  products;
  total;
  ivaType;
  payForm;
  constructor(company, client, products, payForm, ivaType = 21) {
    this.company = company;
    this.client = client;
    this.products = products;
    this.ivaType = ivaType;
    this.total = this.calcTotal();
    this.payForm = payForm;
  }

  calcTotal() {
    let sum = 0;
    this.products.forEach((item) => {
      sum += item.price * item.quantity;
    });
    return sum * (1 + this.ivaType / 100);
  }

  print() {
    return `
    ${this.company.print()}
    -------------------------------------------------------------
    ${this.client.print()}
    `;
  }
}
