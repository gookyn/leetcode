/**
 * 快速排序
 * 
 * 将数组元素从小到大排序
 * 
 * 思路：
 * 分而治之
 * 1、找一个基准值
 * 2、将数组中的其他元素都和这个基准值对比：小于等于基准值的放到一个子数组，大于基准值的放到另一个子数组
 * 3、对两个子数组都重复第 1、2 步，不断递归拆分排序，直到子数组只有一个或零个元素
 * 
 * @param {number[]} arr
 * @return {number[]}
 */
const quickSort = (arr) => {
  // 基线条件：为空或者只包含一个元素的数组是“有序”的
  if (arr.length < 2) {
    return arr;
  } else {
    // 基准值：此处以第一个元素为基准
    const pivot = arr[0];

    // 保存两个子数组
    let less = [], greater = [];

    // 注意：跳过基准值
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        // 所有小于等于基准值的元素
        less.push(arr[i]);
      } else {
        // 所有大于基准值的元素
        greater.push(arr[i]);
      }
    }

    // 递归子数组排序、合并
    return quickSort(less).concat([pivot], quickSort(greater));
  }
};

const arr = [12, 4, 6, 21, 8, 0, 17, 23, 16];

console.log(quickSort(arr));
// [0, 4, 6, 8, 12, 16, 17, 21, 23]