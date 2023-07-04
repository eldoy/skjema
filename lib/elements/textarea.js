var { esc } = require('haka')
var defaults = require('../defaults.js')
var types = require('../types.js')

module.exports = function textarea($, field = {}) {
  var { name = '', placeholder = '', value = '' } = field
  var title = name[0].toUpperCase() + name.slice(1)
  var dataType = types(field.type)
  var dataDefault = defaults(field.type)
  return /* HTML */ `
    <p>
      <label for="${name}">
        ${esc(title)}${field.required ? ` <span class="star">*</span>` : ''}
      </label>
      <textarea
        id="${name}"
        name="${name}"
        oninput="window.clearErrors(this)"
        ${placeholder ? `placeholder="${placeholder}"` : ''}
        ${dataType ? `data-type="${dataType}"` : ''}
        ${value ? `data-default="${dataDefault}"` : ''}
      >
${value || ''}</textarea
      >
      <em class="${name}-errors"></em>
    </p>
  `
}
