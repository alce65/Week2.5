import { Company } from './company.js';
import { Invoice } from './invoice.js';
import { Product } from './product.js';

const myCompany = new Company('Test', 'Sample address', '333', '22-Z');
const myClient = new Company(
  'Test client',
  'Sample address client',
  '555',
  '22-R'
);
const products = [new Product('Test', 33, 2)];

const invoice = new Invoice(myCompany, myClient, products, 'contado');

console.log(invoice.print());
