var { esc } = require('haka')

module.exports = function text($, field = {}) {
  var { name = '', placeholder = '', value = '' } = field
  var title = name[0].toUpperCase() + name.slice(1)
  return /* HTML */ `
    <p>
      <label for="${name}">${esc(title)}</label>
      <textarea
        id="${name}"
        name="${name}"
        placeholder="${placeholder}"
        ${value ? 'data-default=""' : ''}
      >
${value}</textarea
      >
      <em class="${name}-errors"></em>
    </p>
  `
}
