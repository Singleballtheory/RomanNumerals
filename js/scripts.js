const ones = "I"
const fives = "V"
const tens = "X"
const fifties = "L"
const hundreds = "C"
const fiveHundreds = "D"
const thousands = "M"


function romanNumeral(input) {
  if (input <= 3) {
    return ones.repeat(input);
  } else if (input === 4) {
    return "IV"
  } else if (input === 5) {
    return "V"
  } else if (input <= 8) {
    let remainder = input % 5;
    return fives.concat(ones.repeat(remainder));
  } else if (input === 9) {
    return "IX"
  }
}