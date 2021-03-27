const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let team = []
  const p = /[^A-zА-я]+/g
  if (members instanceof Array) {
    team = members.map((name) => {
      if (typeof(name) == 'string') {
        name = name.replace (p, '').toUpperCase()
        return name[0]
      }
    })
  return team.sort().join('').trim()
  }

  return false
};
