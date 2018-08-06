
const computeSumBetween = (num1, num2) => {
    const array = [];
    if (num1 > num2) {
      output = 0;
      return output;
    };
    for (i = num1; i < num2; i++) {
      array.push(i);
    };
    let addition = 0;
    for (let i = 0; i < array.length; i++) {
      addition = addition + array[i];
    };
    return addition
  };
  console.log('computeSumBetween', computeSumBetween(2, 5));
  