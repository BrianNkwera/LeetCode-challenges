/**
 * Given an integer x, return true if x is a
 * palindrome and false otherwise.
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const string = x.toString();

  const arrayOfDigits = string.split("");

  const reversedArrayOfDigits = string.split("").reverse();

  for (let i = 0; i < arrayOfDigits.length; i++) {
    if (arrayOfDigits[i] !== reversedArrayOfDigits[i]) return false;
  }

  return true;
};

var isPalindrome2 = function(x){
    const string = x.toString();

    for(let i = 0; i< string.length; i++){
        if(string.charAt(i) !== string.charAt(string.length -1 - i))
        return false;
    }
    
    return true;
}

console.log(isPalindrome2(10));
