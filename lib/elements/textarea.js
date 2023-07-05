var tags = require('../tags.js')

module.exports = function textarea($, field = {}) {
  return /* HTML */ `
    <p>
      ${tags.label(field)} ${tags.desc(field)}
      <textarea
        id="${field.name}"
        name="${field.name}"
        oninput="window.clearErrors(this)"
        ${tags.placeholder(field)}
        ${tags.type(field)}
        ${tags.defaulty(field)}
      >
${field.value || ''}</textarea
      >
      ${tags.errors(field)}
    </p>
  `
}
