var { esc } = require('haka')

module.exports = function hidden($, field = {}) {
  var { name = '', value = '' } = field
  return /* HTML */ `
    <input id="${name}" name="${name}" type="hidden" value="${esc(value)}" />
  `
}
