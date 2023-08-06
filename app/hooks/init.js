const { esc } = require('haka')

global.esc = esc

global.p = function (obj) {
  console.log(JSON.stringify(obj))
}
