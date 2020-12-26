// Good morning! Here's your coding interview problem for today.
// This problem was asked by Facebook.

// A builder is looking to build a row of N houses that can be of K different colors.
// He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.
// Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color,
// return the minimum cost which achieves this goal.

function main(matrix) {
  const numberOfHouses = matrix.length;
  const numberOfColours = matrix[0].length;

  const calculationArray = [[]];
  matrix[0].forEach(() => calculationArray[0].push(0));

  matrix.forEach((row, i) => {
    // find the min price of painting house i each colour
    row.forEach((price, colour) => {
      const minPrice = calculationArray[i].reduce((prev, curr, i) => {
        if (i === colour) {
          return prev;
        }
        if (prev === null || curr <= prev) {
          return curr;
        }
        return prev;
      }, null) + price;
      if (!calculationArray[i+1]) {
        calculationArray[i+1] = [];
      }
      calculationArray[i+1][colour] = minPrice;
    });
  });

  return calculationArray[calculationArray.length-1].reduce((prev, curr) => {
    if (prev === null || curr < prev) {
      return curr;
    }
    return prev;
  }, null);
}

const testInputs = [
  [
    [100, 30, 70],
    [80, 0, 65],
    [40, 40, 90],
    [20, 90, 80],
  ],
];

const expectedResults = [155];

testInputs.forEach((input, i) => {
  if (main(input) !== expectedResults[i]) {
    console.log('test failed for input', input);
  } else {
    console.log('test passed!', input)
  }
})