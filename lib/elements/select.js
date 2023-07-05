var { esc } = require('haka')
var types = require('../types.js')
var defaults = require('../defaults.js')

module.exports = function select($, field = {}) {
  var { name = '', options = [], value = '' } = field
  var dataType = types(field)
  var dataDefault = defaults(field)

  function renderOption(option) {
    if (typeof option == 'string') {
      option = {
        [option]: option[0].toUpperCase() + option.slice(1)
      }
    }
    var [val, text] = Object.entries(option)[0]
    return /* HTML */ `<option
      value="${val}"
      ${value == val ? ' selected' : ''}
    >
      ${esc(text)}
    </option>`
  }

  var title = name[0].toUpperCase() + name.slice(1)
  return /* HTML */ `
    <p>
      <label for="${name}">
        ${esc(title)}${field.required ? ` <span class="star">*</span>` : ''}
      </label>
      <select
        id="${name}"
        name="${name}"
        ${dataType ? `data-type="${dataType}"` : ''}
        ${typeof value != 'undefined' ? `data-default="${dataDefault}"` : ''}
      >
        ${options.map(renderOption).join('\n')}
      </select>
      <em class="${name}-errors"></em>
    </p>
  `
}
