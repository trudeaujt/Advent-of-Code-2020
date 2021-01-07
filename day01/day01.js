export const problem1 = (numbers, target) => {
    var set = new Set();
    var result = 0;
    var complement = 0;

    set.add(numbers[0]);

    for(var i = 1; i < numbers.length; ++i) {
      complement = target - numbers[i];

      if(set.has(complement)) {
        result = numbers[i] * complement;
        break;
      }
      set.add(numbers[i]);
    }
    return result;
};

export const problem2 = (numbers, target) => {
  var result = 0;
  var complement = 0;
  var containsComplement = 0;

  for(var i = 0; i < numbers.length - 1; ++i) {
    complement = target - numbers[i]
    containsComplement = problem1(numbers.slice(i), complement);

    if(containsComplement != 0) {
      result = containsComplement * numbers[i];
      break;
    }
  }
  return result;
};