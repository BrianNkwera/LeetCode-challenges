/**
 * Given a string s, find the length of
 * the longest substring without
 * repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const setOfUniqueCharacters = new Set();
  let currentIndex = 0;
  let longestSubstringLength = 0;

  for (let i = 0; i < s.length; i++) {
    /**
     * Check if character is already contained in unique set
     * If already contained restart loop from the i + 1;
     * By placing pointer(current index) to i++
     */

    if (setOfUniqueCharacters.has(s.charAt(i))) {
      i = currentIndex++;
      setOfUniqueCharacters.clear();
    } else {
      setOfUniqueCharacters.add(s.charAt(i));
    }
    if (longestSubstringLength < setOfUniqueCharacters.size) {
      longestSubstringLength = setOfUniqueCharacters.size;
    }
  }

  console.log(setOfUniqueCharacters);

  return longestSubstringLength;
};

console.log(lengthOfLongestSubstring(" "));
