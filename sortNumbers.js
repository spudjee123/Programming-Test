function sortNumbersByCount(numbers) {
 
  const countNumber = {};
  numbers.forEach(function(number) {
    if (countNumber[number]) {
      countNumber[number]++;
    } else {
      countNumber[number] = 1;
    }
  });

  return numbers.sort(function(a, b) {
    if (countNumber[a] === countNumber[b]) {
      return a - b; 
    } else {
      return countNumber[a] - countNumber[b]; 
    }
  });
}

const inputNumbers = [2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8];
const sortedNumbers = sortNumbersByCount(inputNumbers);
console.log(sortedNumbers);
