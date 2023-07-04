var { esc } = require('haka')
var defaults = require('../defaults.js')
var types = require('../types.js')

module.exports = function checkbox($, field = {}) {
  var { name = '', type = '', options = [], value = [] } = field
  var dataType = types(type)
  var dataDefault = defaults(type)

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
          data-type="bool"
          data-type="${dataType}"
          data-default="${dataDefault}"
          ${value.includes(val) ? ' checked' : ''}
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
