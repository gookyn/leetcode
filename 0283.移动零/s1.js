/**
 * https://leetcode.cn/problems/move-zeroes/
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  // 关键下标，将按照顺序保存非 0 的数据
  var index = 0;

  // 将非 0 的数据保存到数组
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // 保存之后增加 index 值
      nums[index++] = nums[i];
    }
  }

  // 其余位置补 0
  for (var j = index; j < nums.length; j++) {
    nums[j] = 0;
  }
};