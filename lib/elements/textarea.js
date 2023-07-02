var { esc } = require('haka')
var defaults = require('../defaults.js')
var types = require('../types.js')

module.exports = function textarea($, field = {}) {
  var { name = '', placeholder = '', value = '' } = field
  var title = name[0].toUpperCase() + name.slice(1)
  return /* HTML */ `
    <p>
      <label for="${name}">
        ${esc(title)}${field.required ? ` <span class="star">*</span>` : ''}
      </label>
      <textarea
        id="${name}"
        name="${name}"
        placeholder="${placeholder}"
        data-type="${types(field.type)}"
        ${value ? `data-default="${defaults(field.type)}"` : ''}
      >
${value}</textarea
      >
      <em class="${name}-errors"></em>
    </p>
  `
}
