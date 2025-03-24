/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  //ignore the leading whitespace;
  let stringWithoutWhiteSpace = s.trim();

  //check for signedness
  const isNegative = stringWithoutWhiteSpace.charAt(0) === "-";

  if (stringWithoutWhiteSpace.charAt(0) === '-' || stringWithoutWhiteSpace.charAt(0) === '+' ) {
    stringWithoutWhiteSpace = stringWithoutWhiteSpace.substring(1);
  }

  let extractedDigits = "0";

  for (let i = 0; i < stringWithoutWhiteSpace.length ; i++) {
    if (!(/\d/.test(stringWithoutWhiteSpace.charAt(i)))) {
      break;
    }

    extractedDigits = extractedDigits.concat(stringWithoutWhiteSpace.charAt(i));
  }

  const number = Number(extractedDigits);

  const signedNumber = isNegative ? number * -1 : number;

  // 32-bit signed integer range: -2^31 to 2^31 - 1
  const minInt32 = -2147483648;
  const maxInt32 = 2147483647;

  if (signedNumber < minInt32) {
    return minInt32;
  } else if (signedNumber > maxInt32) {
    return maxInt32;
  } else {
    return signedNumber;
  }
};

console.log(myAtoi("   +042"));
