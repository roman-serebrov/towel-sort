
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    if (matrix.length < 1) {
        return []
      }
      for(let i = 0;i<matrix.length;i++) {
        if(i % 2 !== 0) {
          matrix[i] = matrix[i].reverse()      
        }
       
      }
    let res = matrix.concat.apply([], matrix)
       return res
  }
