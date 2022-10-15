/**
 * 阶乘
 * 
 * 用递归实现
 * 
 * 注意：基线条件 和 递归条件 ！！！
 * 
 * @param {number} x
 * @return {number}
 */
const factorial = (x) => {
  if (x === 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
};

console.log(factorial(5));