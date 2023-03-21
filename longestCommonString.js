/**
 * Write a function to find the longest common prefix string
 * amongst an array of strings.If there is no common prefix,
 * return an empty string "".
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const firstString = strs[0];
  let commonLetters = firstString.split("");
  

  for (let i = 1; i < strs.length; i++) {
    for (let charIndex = firstString.length - 1; charIndex >= 0; charIndex--) {
      if (strs[i].charAt(charIndex) != firstString.charAt(charIndex)) {
        //remove string from index
        commonLetters = commonLetters.filter((letter, index) => index < charIndex)
      }
    }
  }

  return commonLetters.join("");
};

console.log(longestCommonPrefix(["cir","car"]));
