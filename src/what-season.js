const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  console.log(JSON.stringify(date))
  if (date == undefined) return 'Unable to determine the time of year!'
  
  let month = date.toISOString().split('-',2)
  let season = ''
  switch (month[1]) {
    case '12': 
    case '01':
    case '02':
      season = 'winter';
      break;
    case '03':
    case '04':
    case '05':
      season = 'spring';
      break;
    case '06':
    case '07':
    case '08':
      season = 'summer';
      break;
    case '09':
    case '10':
    case '11':
      season = 'autumn';
      break;
    default:
      season = '';
  }
  return season
};
