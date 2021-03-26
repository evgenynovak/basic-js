const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let number = 0
  matrix.map(
    (variant) => {
      variant.map(
        (cat)=>{
          if (cat=='^^') {
            number = number + 1
          } 
        }
      )
    }
  )
  return number
  // remove line with error and write your code here
};
