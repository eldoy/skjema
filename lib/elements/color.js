var { esc } = require('haka')
var defaults = require('../defaults.js')
var types = require('../types.js')

module.exports = function string($, field = {}) {
  var { name = '', value = '' } = field
  var title = name[0].toUpperCase() + name.slice(1)
  return /* HTML */ `
    <p>
      <label for="${name}">
        ${esc(title)}${field.required ? `<span class="star">*</span>` : ''}
      </label>
      <input
        id="${name}"
        name="${name}"
        type="color"
        value="${value}"
        data-type="${types(field.type)}"
        ${value ? `data-default="${defaults(field.type)}"` : ''}
      />
      <em class="${name}-errors"></em>
    </p>
  `
}
