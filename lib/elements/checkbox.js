var { esc } = require('haka')
var tags = require('../tags.js')

module.exports = function checkbox($, field = {}) {
  var { name = '', options = [], value = [] } = field
  function renderOption(option) {
    if (typeof option == 'string') {
      option = {
        [option]: option[0].toUpperCase() + option.slice(1)
      }
    }
    var [val, text] = Object.entries(option)[0]
    return /* HTML */ `
      <label>
        <input
          type="checkbox"
          name="${name}"
          value="${val}"
          onclick="window.clearErrors(this)"
          ${value.includes(val) ? ' checked' : ''}
        />
        ${esc(text)}
      </label>
    `
  }

  return /* HTML */ `
    <fieldset>
      ${tags.legend(field)} ${options.map(renderOption).join('\n')}
      ${tags.errors(field)}
    </fieldset>
  `
}
