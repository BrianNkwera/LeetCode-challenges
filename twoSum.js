/*
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const requiredIndeces = [];

  for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
    currentNumber = nums[currentIndex];
    for (let nextIndex = currentIndex + 1; nextIndex < nums.length; nextIndex++) {
      nextNumber = nums[nextIndex];
      sum = nextNumber + currentNumber;
      if (sum === target) {
        requiredIndeces.push(currentIndex);
        requiredIndeces.push(nextIndex);
        return requiredIndeces;
      }
    }
  }

  return [];
};

console.log(twoSum([3,2,4], 6))
