var { esc } = require('haka')
var types = require('../types.js')
var defaults = require('../defaults.js')

module.exports = function bool($, field = {}) {
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
    return /* HTML */ `
      <label>
        <input
          type="checkbox"
          name="${name}"
          value="${val}"
          data-type="${dataType}"
          data-default="${dataDefault}"
          ${value == val ? ' checked' : ''}
        />
        ${esc(text)}
      </label>
    `
  }
  var title = name[0].toUpperCase() + name.slice(1)

  return /* HTML */ `
    <fieldset>
      <legend>
        ${esc(title)}${field.required ? ` <span class="star">*</span>` : ''}
      </legend>
      ${options.map(renderOption).join('\n')}
      <em class="${name}-errors"></em>
    </fieldset>
  `
}