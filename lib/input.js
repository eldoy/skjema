var { esc } = require('haka')
var defaults = require('./defaults.js')
var types = require('./types.js')

module.exports = function input(type, $, field = {}) {
  var { name = '', placeholder = '', value = '' } = field
  var title = name[0].toUpperCase() + name.slice(1)
  var dataType = types(field.type)
  var dataDefault = defaults(field.type)
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
