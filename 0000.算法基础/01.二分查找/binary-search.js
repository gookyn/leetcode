/**
 * 二分查找
 * 
 * 输入一个“有序”数组和一个元素，如果指定的元素包含在数组中，则返回其位置；否则返回 null
 * 
 * 思路：
 * 1、记录头尾索引，用于标识查找范围
 * 2、根据头尾获取中间位置索引及对应值
 * 3、比较中间值和目标值大小，如果恰好相等，则返回位置；如果不等，则改变头或尾索引，缩小范围继续查找
 * 
 * @param {number[]} list
 * @param {number} target
 * @return {number | null}
 */
const binarySearch = (list, target) => {
  // 记录头尾索引
  let low = 0, high = list.length - 1;

  // 只要范围没有缩小到一个元素，就继续查找
  while (low <= high) {
    // 获取中间位置索引及对应值
    const mid = parseInt((low + high) / 2);
    const guess = list[mid];

    // 比较中间值和目标值大小
    if (guess === target) {
      return mid;
    } else if (guess < target) {
      low = mid + 1;
    } else if (guess > target) {
      high = mid - 1;
    }
  }

  return null;
};


const list = [1, 3, 5, 6, 9, 10, 13, 17, 20], target = 6;

console.log(binarySearch(list, target));