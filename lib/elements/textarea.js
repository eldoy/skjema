var tags = require('../tags.js')

module.exports = function textarea($, field = {}) {
  var { name = '', value = '' } = field

  return /* HTML */ `
    <p>
      ${tags.label(field)} ${tags.desc(field)}
      <textarea
        class="${name}-field"
        name="${name}"
        oninput="window.handleClearErrors(this)"
        ${tags.placeholder(field)}
        ${tags.type(field)}
        ${tags.defaulty(field)}
      >
${value || ''}</textarea
      >
      ${tags.errors(field)}
    </p>
  `
}
