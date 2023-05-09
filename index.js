import { newMap } from './map.js';

try {
  newMap([7]);
} catch (error) {
  console.error(error.message);
}

console.log('Todo bien');
