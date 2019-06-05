import {find} from './task119';
import {checkForShips} from './task119';

it('func find', () => {
  expect(find([1, 0, 3], 1)).toEqual(1);
  expect(find([1, 2, 3], 4)).toEqual(null);
});

console.log(checkForShips([[1, 2], [0, 0], [3, 1]], 4));

it('func findShips', () => {
  expect(checkForShips([[1, 2], [0, 0], [3, 1]], 1)).toEqual(0);
  expect(checkForShips([[1, 2], [0, 0], [3, 1]], 4)).toEqual(null);
});