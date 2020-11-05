/*
 * @lc app=leetcode.cn id=273 lang=javascript
 *
 * [273] 整数转换英文表示
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if (num == 0) return 'Zero'
  const singles = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
  const units = ['', 'Thousand', 'Million', 'Billion']
  const arr = []
  while (num >= 1000) {
    arr.push(num % 1000)
    num = Math.floor(num / 1000)
  }
  arr.push(num)
  const res = []
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (!item) continue
    let str = []
    while (item > 0) {
      if (item >= 100) {
        str.push(singles[Math.floor(item / 100)] + ' Hundred')
        item = item % 100
      } else if (item > 19) {
        str.push(tens[Math.floor(item / 10)])
        item = item % 10
      } else {
        str.push(singles[item])
        item = 0
      }
    }
    str = str.join(' ')
    const unit = units[i]
    str = unit ? str + ' ' + unit : str
    res.push(str)
  }
  return res.reverse().join(' ')
};
// @lc code=end
numberToWords(12345)
