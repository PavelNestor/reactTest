const HEIGHT = 10;
const WIDTH = 10;
export default function () {

  const ships = {
    0: { 'status': true, coord: [[0, 0], [0, 1], [0, 2], [0, 3]] },
    1: { 'status': true, coord: [[2, 0], [2, 1], [2, 2]] },
    2: { 'status': true, coord: [[2, 0], [2, 1], [2, 2]] },
    3: { 'status': true, coord: [[4, 0], [4, 1]] },
    4: { 'status': true, coord: [[4, 3], [4, 4]] },
    5: { 'status': true, coord: [[4, 6], [4, 7]] },
    6: { 'status': true, coord: [[6, 0]] },
    7: { 'status': true, coord: [[6, 3]] },
    8: { 'status': true, coord: [[6, 5]] },
    9: { 'status': true, coord: [[6, 7]] },
  }


  return ships;
}

export function createInitialArray() {
  let result = [];
  for(let index = 0; index < HEIGHT; index++) {
    result.push(new Array(WIDTH).fill(0));
  };
  return result;
};