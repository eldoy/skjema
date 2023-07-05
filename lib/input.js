var { esc } = require('haka')
var tags = require('./tags.js')

module.exports = function input(type, $, field = {}) {
  var { name = '', type = '', placeholder = '', value } = field
  var title = name[0].toUpperCase() + name.slice(1)
  var dataType = tags.types(field)
  var dataDefault = tags.defaults(field)
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
        ${typeof value != 'undefined' ? `data-default="${dataDefault}"` : ''}
      />
      <em class="${name}-errors"></em>
    </p>
  `
}
