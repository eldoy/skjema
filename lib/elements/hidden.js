var { esc } = require('haka')

module.exports = function hidden($, field = {}) {
  var { name = '', value = '' } = field
  return /* HTML */ `
    <input
      class="${name}-field"
      name="${name}"
      type="hidden"
      value="${esc(value)}"
    />
  `
}
