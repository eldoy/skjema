var { esc } = require('haka')
var types = require('../types.js')
var defaults = require('../defaults.js')

module.exports = function textarea($, field = {}) {
  var { name = '', placeholder = '', value = '' } = field
  var title = name[0].toUpperCase() + name.slice(1)
  var dataType = types(field)
  var dataDefault = defaults(field)
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
        ${typeof value != 'undefined' ? `data-default="${dataDefault}"` : ''}
      >
${value || ''}</textarea
      >
      <em class="${name}-errors"></em>
    </p>
  `
}
