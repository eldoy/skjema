var { esc } = require('haka')
var input = require('../input.js')

module.exports = function password($, field = {}) {
  return input('password', $, field)
}
