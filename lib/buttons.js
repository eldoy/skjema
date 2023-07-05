var { esc } = require('haka')
var tags = require('./tags.js')

module.exports = function buttons($, field = {}) {
  var { name = '', options = [], value } = field

  function renderOption(option, i) {
    if (typeof option == 'string') {
      option = {
        [option]: option[0].toUpperCase() + option.slice(1)
      }
    }
    var [val, text] = Object.entries(option)[0]
    return /* HTML */ `
      <label>
        <input
          type="radio"
          name="${name}"
          value="${val}"
          onclick="window.clearErrors(this)"
          ${value == val || i == 0 ? ' checked' : ''}
          ${tags.type(field)}
          ${tags.defaulty(field)}
        />
        ${esc(text)}
      </label>
    `
  }
  return /* HTML */ `
    <fieldset>
      ${tags.legend(field)} ${tags.desc(field)}
      ${options.map(renderOption).join('\n')} ${tags.errors(field)}
    </fieldset>
  `
}
