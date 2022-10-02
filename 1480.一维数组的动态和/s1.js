/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  var sum = 0;
  var sumArr = [];

  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    sumArr.push(sum);
  }

  return sumArr;
};

/**
 * 多声明了变量
 * 多执行了一次加法运算
 */
