/**
 * https://leetcode.cn/problems/remove-element/
 * 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  var index = 0;

  for (var i = 0; i < nums.length; i++) {
    // 仅保存不等于 val 的数据
    if (nums[i] !== val) {
      nums[index++] = nums[i];
    }
  }

  return index;
};