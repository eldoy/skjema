var input = require('../input.js')

module.exports = function text($, field = {}) {
  return input('text', $, field)
}
