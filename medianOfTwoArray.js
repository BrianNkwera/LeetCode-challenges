/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, 
 * return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
    //join the arrays
  const concatenatedArray = nums1.concat(nums2);

  //sort the array
  concatenatedArray.sort((a, b) => a - b);

  /**
   * Find Median;
   * If array length is odd median is the middle element
   * If is event median is average of two middle elements
   */
  const midpoint = Math.floor(concatenatedArray.length / 2);
  const median =
    concatenatedArray.length % 2 == 1
      ? concatenatedArray[midpoint]
      : (concatenatedArray[midpoint - 1] + concatenatedArray[midpoint]) / 2;

  return median
};

findMedianSortedArrays([1, 3], [2, 4]);
