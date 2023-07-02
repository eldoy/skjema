var input = require('../input.js')

module.exports = function email($, field = {}) {
  return input('email', $, field)
}
