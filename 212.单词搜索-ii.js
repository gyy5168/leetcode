/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  const trie = Object.create(null)
  for (const word of words) {
    let node = trie
    for (const i of word) {
      if (!node[i]) node[i] = Object.create(null)
      node = node[i]
    }
    node.word = word
  }
  const search = (node, i, j) => {
    if (node.word) {
      res.push(node.word)
      node.word = null
    }
    if (i < 0 || j < 0 || i >= row || j >= col || !board[i][j]) return
    if (!node[board[i][j]]) return
    let tmp = board[i][j]
    board[i][j] = null
    search(node[tmp], i - 1, j)
    search(node[tmp], i, j - 1)
    search(node[tmp], i + 1, j)
    search(node[tmp], i, j + 1)
    board[i][j] = tmp
  }

  const res = []
  const row = board.length
  const col = board[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      search(trie, i, j)
    }
  }
  return res
};
// @lc code=end

