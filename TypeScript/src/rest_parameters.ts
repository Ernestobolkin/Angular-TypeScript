const add1 = (...numbers: number[]) => {
  return numbers.reduce((prevNum, currNum) => {
    return prevNum + currNum;
  }, 0);
};

const addedNumbers = add1(5, 1, 2, 3, 4, 1.1);
console.log(addedNumbers);
