/**
 * 选择排序
 * 
 * 将数组元素从小到大排序
 * 
 * 思路：
 * 1、第一次遍历数组，找出最小的元素，并将最小元素放到第一位
 * 2、从剩余未排序的元素中，继续寻找最小元素，放到第二位
 * 3、重复执行，直到所有的元素都对比过
 * 
 * @param {number[]} arr
 * @return {number[]}
 */
const selectionSort = (arr) => {
  // 记录最小元素的索引
  let smallestIndex;

  // 临时变量用于交换数据
  let temp;

  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    // 默认初始最小元素为当前循环的第一个
    smallestIndex = i;
    for (let j = i + 1; j < len; j++) {
      // 将未排序的元素和最小元素对比，如果比最小元素小，则更新最小元素索引
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }
    // 交换元素 
    temp = arr[i];
    arr[i] = arr[smallestIndex];
    arr[smallestIndex] = temp;
  }

  return arr;
};


const arr = [12, 4, 6, 21, 8, 0, 17, 23, 16];

console.log(selectionSort(arr));