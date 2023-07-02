var { esc } = require('haka')

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
        ${value ? 'data-default=""' : ''}
      />
      <em class="${name}-errors"></em>
    </p>
  `
}
