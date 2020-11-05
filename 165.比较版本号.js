/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  version1 = (version1 + '...').split('.').slice(0, 4).map(item => parseInt(item||0))
  version2 = (version2 + '...').split('.').slice(0, 4).map(item => parseInt(item||0))
  for (let i = 0; i < 4; i++) {
    if (version1[i] > version2[i]) return 1
    if (version1[i] < version2[i]) return -1
  }
  return 0
};
// @lc code=end
