export default function (matrix) {
  let result = 0;
  let newX = 0;
  let newY = 0;
  for (let index = 0; index < matrix.length; index++) {
    for (let innerIndex = 0; innerIndex < matrix[index].length; innerIndex++) {
      if (matrix[index][innerIndex] > result) {
        result = matrix[index][innerIndex];
        newY = index;
        newX = innerIndex;
      };
    };
  };

  return [newY, newX];
};