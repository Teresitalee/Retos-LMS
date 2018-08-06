
const findSmallestNumberAmongMixedElements = (arr) => {
    const newArr = arr.filter(index => typeof index === 'number');
    if (newArr.length === 0) {
      output = 0;
      return output;
    } else {
      for (let i = 0; i < newArr.length - 1; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
          if (newArr[i] > newArr[j]) {
            output = newArr[j];
          } else {
            output = newArr[i];
          };
        };
        return output;
      };
    };
  };
  console.log('findSmallestNumberAmongMixedElements', findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']))