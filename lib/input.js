var { esc } = require('haka')
var types = require('./types.js')
var defaults = require('./defaults.js')

module.exports = function input(type, $, field = {}) {
  var { name = '', type = '', placeholder = '', value = '' } = field
  var title = name[0].toUpperCase() + name.slice(1)
  var dataType = types(field)
  var dataDefault = defaults(field)
  return /* HTML */ `
    <p>
      <label for="${name}">
        ${esc(title)}${field.required ? ` <span class="star">*</span>` : ''}
      </label>
      <input
        id="${name}"
        name="${name}"
        type="${type}"
        oninput="window.clearErrors(this)"
        ${placeholder ? `placeholder="${placeholder}"` : ''}
        ${value ? `value="${value}"` : ''}
        ${dataType ? `data-type="${dataType}"` : ''}
        ${value ? `data-default="${dataDefault}"` : ''}
      />
      <em class="${name}-errors"></em>
    </p>
  `
}
