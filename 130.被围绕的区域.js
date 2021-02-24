/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  // let row = board.length
  // if (!row) return
  // let col = board[0].length
  // const dfs = function (i, j) {
  //   if (i < 0 || j < 0 || i >= row || j >= col || board[i][j] !== 'O') return
  //   board[i][j] = 'A'
  //   dfs(i - 1, j)
  //   dfs(i + 1, j)
  //   dfs(i, j - 1)
  //   dfs(i, j + 1)
  // }
  // for (let i = 0; i < row; i++) {
  //   dfs(i, 0)
  //   dfs(i, col - 1)
  // }
  // for (let i = 1; i < col - 1; i++) {
  //   dfs(0, i)
  //   dfs(row - 1, i)
  // }
  // for (let i = 0; i < row; i++) {
  //   for (let j = 0; j < col; j++) {
  //     if (board[i][j] === 'A') {
  //       board[i][j] = 'O'
  //     } else if (board[i][j] === 'O') {
  //       board[i][j] = 'X'
  //     }
  //   }
  // }

  let row = board.length
  if (!row) return
  let col = board[0].length
  let count = row * col
  let uf = new UnionFind(count + 1)
  let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === 'O') {
        if (i === 0 || j === 0 || i === row - 1 || j === col - 1) {
          uf.union(i * col + j, count)
        } else {
          for (let k = 0; k < directions.length; k++) {
            let x = i + directions[k][0]
            let y = j + directions[k][1]
            if (board[x][y] === 'O') uf.union(x * col + y, i * col + j)
          }
        }
      }
    }
  }
  for (let i = 1; i < row - 1; i++) {
    for (let j = 1; j < col - 1; j++) {
      if (board[i][j] === 'O') {
        if (!uf.isConnected(i * col + j, count)) board[i][j] = 'X'
      }
    }
  }
};
class UnionFind {
  constructor(n) {
    this.count = n
    this.parent = new Array(n)
    this.size = new Array(n)
    for (let i = 0; i < n; i++) {
      this.parent[i] = i
      this.size[i] = 1
    }
  }
  find(p) {
    while(this.parent[p] !== p) {
      this.parent[p] = this.parent[this.parent[p]]
      p = this.parent[p]
    }
    return p
  }
  isConnected(p, q) {
    return this.find(p) === this.find(q)
  }
  union(p, q) {
    let rootP = this.find(p)
    let rootQ = this.find(q)
    if (rootP === rootQ) return

    if (this.size[rootP] > this.size[rootQ]) {
      this.parent[rootQ] = rootP
      this.size[rootP] += this.size[rootQ]
    } else {
      this.parent[rootP] = rootQ
      this.size[rootQ] += this.size[rootP]
    }

    this.count--
  }
}
// @lc code=end

