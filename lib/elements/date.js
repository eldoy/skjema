var input = require('../input.js')

module.exports = function date($, field = {}) {
  var { value } = field
  if (typeof value != 'undefined') {
    if (typeof value == 'object') {
      value = value.toISOString()
    }
    field.value = value.split('T')[0]
  }
  return input('date', $, field)
}
