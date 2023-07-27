var { esc } = require('haka')
var tags = require('./tags.js')

module.exports = function input(type, $, field = {}) {
  var { name = '', type = '', value } = field
  return /* HTML */ `
    <p>
      ${tags.label(field)} ${tags.desc(field)}
      <input
        class="${name}-field"
        name="${name}"
        type="${type}"
        oninput="window.handleClearErrors(this)"
        ${value ? `value="${value}"` : ''}
        ${tags.placeholder(field)}
        ${tags.type(field)}
        ${tags.defaulty(field)}
      />
      ${tags.errors(field)}
    </p>
  `
}
