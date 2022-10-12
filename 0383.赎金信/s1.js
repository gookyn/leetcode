/**
 * https://leetcode.cn/problems/ransom-note/
 * 
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // 目标字符大于源字符，肯定为 false
  if (ransomNote.length > magazine.length) {
    return false;
  }

  for (var i = 0; i < ransomNote.length; i++) {
    // 只要有一个字符不存在，直接返回 false
    if (magazine.indexOf(ransomNote[i]) === -1) {
      return false;
    }
    // 如果字符存在，则删除一个该字符，继续遍历
    magazine = magazine.replace(ransomNote[i], '');
  }

  return true;
};

/**
 * str.indexof() 相当于一次循环，因此会增加时间复杂度
 */
