var { esc } = require('haka')
var tags = require('../tags.js')

module.exports = function select($, field = {}) {
  var { name = '', options = [], value } = field

  function renderOption(option) {
    if (typeof option == 'string') {
      option = { [option]: tags.titleize(option) }
    }
    var [val, text] = Object.entries(option)[0]
    return /* HTML */ `<option
      value="${val}"
      ${value == val ? ' selected' : ''}
    >
      ${esc(text)}
    </option>`
  }

  return /* HTML */ `
    <p>
      ${tags.label(field)} ${tags.desc(field)}
      <select
        id="${name}"
        name="${name}"
        ${tags.type(field)}
        ${tags.defaulty(field)}
      >
        ${options.map(renderOption).join('\n')}
      </select>
      ${tags.errors(field)}
    </p>
  `
}
