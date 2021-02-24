/*
 * @lc app=leetcode.cn id=990 lang=javascript
 *
 * [990] 等式方程的可满足性
 */

// @lc code=start
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  // let uf = new UnionFind(26)
  // equations.sort((a, b) => b[1] === '=' ? 1 : -1)
  // for (let i = 0; i < equations.length; i++) {
  //   const equation = equations[i]
  //   if (equation[1] === '=') {
  //     uf.union(equation[0].charCodeAt() - 97, equation[3].charCodeAt() - 97)
  //   } else {
  //     if (uf.isConnected(equation[0].charCodeAt() - 97, equation[3].charCodeAt() - 97)) return false
  //   }
  // }
  // return true

  let uf = new UnionFind(26)
  for (let i = 0; i < equations.length; i++) {
    const equation = equations[i]
    if (equation[1] === '=') {
      uf.union(equation[0].charCodeAt() - 97, equation[3].charCodeAt() - 97)
    }
  }
  for (let i = 0; i < equations.length; i++) {
    const equation = equations[i]
    if (equation[1] === '!') {
      if (uf.isConnected(equation[0].charCodeAt() - 97, equation[3].charCodeAt() - 97)) return false
    }
  }
  return true
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

