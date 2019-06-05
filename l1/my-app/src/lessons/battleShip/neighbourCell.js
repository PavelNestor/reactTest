export default function (matrix, y, x) {
  let result = 0;
  let newX = 0;
  let newY = 0;
  for (let index = y - 1; index <= y + 1; index++) {
    for (let innerIndex = x - 1; innerIndex <= x + 1; innerIndex++) {
      if (matrix[index][innerIndex] > result) {
        result = matrix[index][innerIndex];
        newY = index;
        newX = innerIndex;
      };
    };
  };

  return [newY, newX];
};