const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let number = 0
  // if ((!isNaN(sampleActivity)) && (sampleActivity>=0)) {
  //  number = Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD)
  //  return Math.ceil(number)
  // }
  if (typeof(sampleActivity) == "string") {
    let value = Number(sampleActivity)
      number = Math.log(MODERN_ACTIVITY/value)/(0.693/HALF_LIFE_PERIOD)
      return Math.ceil(number)
  } else return false
  return false

  // remove line with error and write your code here
};
