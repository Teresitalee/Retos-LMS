
const findShortestOfThreeWords = (word1, word2, word3) => {
    if (word1.length <= word2.length) {
      word = word1;
    } else {
      word = word2;
    };
    if (word.length > word3.length) {
      word = word3;
    };
    return word;
  };
  console.log('findShortestOfThreeWords', findShortestOfThreeWords('a', 'dos', 'tres'));