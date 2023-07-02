var { esc } = require('haka')
var input = require('../input.js')

module.exports = function string($, field = {}) {
  return input('string', $, field)
}
