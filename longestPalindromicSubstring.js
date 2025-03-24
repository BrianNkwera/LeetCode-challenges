/**
 * Given a string s,
 * return the longest palindromic substring in s.
 */

/**
 * @param {string}
 * @return {string}
 */

const isPalindrome = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) !== string.charAt(string.length - 1 - i)) return false;
  }

  return true;
};
var longestPalindrome = function (s) {
  let longestSubstring = s[0];

  if(isPalindrome(s)) return s

  for (let i = 0; i < s.length; i++) {
    for (j = 0; j <= s.length; j++) {
      const substring = s.substring(i, j);
      if (
        isPalindrome(substring) &&
        substring.length > longestSubstring.length
      ) {
        longestSubstring = substring;
      }
    }
  }

  return longestSubstring;
};

console.log(longestPalindrome("cbbd"));
