/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  for (var i = 1; i < nums.length; i++) {
    // 直接修改传入的数组
    // 从数组第二位开始求和
    nums[i] += nums[i - 1];
  }

  return nums;
};

/**
 * 较优解
 */
