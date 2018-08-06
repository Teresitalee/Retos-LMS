
const filterOddElements = (arr) => {
    const output = arr.filter((index) => {
      return index % 2 !== 0;
    });
    return output
  };
  console.log('filterOddElements', filterOddElements([1, 2, 3, 4, 5]));