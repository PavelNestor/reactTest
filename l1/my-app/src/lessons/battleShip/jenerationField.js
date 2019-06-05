const EMPTY_BOX = 0;
const SHIP_BOX = 1;

export function createInitialArray(width, height) {
  const result = [];

  for (let index = 0; index < height; index++) {
    result.push(
      new Array(width).fill(EMPTY_BOX)
    );
  }

  return result;
}

export function checkCurrentFieldFor(array, x, y, checkFor) {
  if (!Array.isArray(checkFor)) {
    checkFor = [checkFor];
  }


  if (!array[y] && checkFor.indexOf(array[y]) === -1) {
    return false;
  }

  return checkFor.indexOf(array[y][x]) >= 0;
}

export function checkAllNearbyFieldsFor(array, x, y, checkFor, isShouldAll = false) {
  for (let index = x - 1; index <= x + 1; index++) {
    for (let innerIndex = y - 1; innerIndex <= y + 1; innerIndex++) {
      const currentFieldResult = checkCurrentFieldFor(array, index, innerIndex, checkFor);
      if (isShouldAll && !currentFieldResult) {
        return !isShouldAll;
      } else if (!isShouldAll && currentFieldResult) {
        return !isShouldAll;
      }
    }
  }
  return isShouldAll;
}

export function checkIfShipCanBePlaced(array, x, y, size, orientation) {

  if (orientation) {
    for (let index = 0; index < size; index++) {
      if (!checkCurrentFieldFor(array, x + index, y, EMPTY_BOX) ||
        checkAllNearbyFieldsFor(array, x + index, y, SHIP_BOX)) {
        return false;
      }
    }
  } else {
    for (let index = 0; index < size; index++) {
      if (!checkCurrentFieldFor(array, x, y + index, EMPTY_BOX) ||
        checkAllNearbyFieldsFor(array, x, y + index, SHIP_BOX)) {
        return false;
      }
    }
  }

  return true;
}

export function randomInt(min = 0, max = 100) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

export function placeShip(array, x, y, size, orientation) {
  if (!size) {
    throw new Error('You shuld pass size as argument');
  }

  if (orientation) {
    for (let index = 0; index < size; index++) {
      array[y][x + index] = SHIP_BOX;
    }
  } else {
    for (let index = 0; index < size; index++) {
      array[y + index][x] = SHIP_BOX;
    }
  }

  return array;
}

// param {object} options - {[sizeOfShip]: number (count of ships of that size)}
export default function (width = 10, height = 10, options = {}) {
  let iterationsCount = 0;
  const result = createInitialArray(width, height);

  for (const size in options) {
    const count = options[size];

    for (let index = 0; index < count; index++) {

      while (true) {
        if (++iterationsCount > 1000000) {
          throw new Error('You can`t place so much ships on this field');
        }

        const randomX = randomInt(0, width - 1);
        const randomY = randomInt(0, height - 1);
        const orientation = randomInt(0, 1);

        if (checkIfShipCanBePlaced(result, randomX, randomY, size, orientation)) {
          placeShip(result, randomX, randomY, size, orientation);
          break;
        }
      }
    }
  }

  return result;
}