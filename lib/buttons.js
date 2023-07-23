var { esc } = require('haka')
var tags = require('./tags.js')

module.exports = function buttons($, field = {}) {
  var { name = '', options = [], value } = field

  function renderOption(option, i) {
    if (typeof option == 'string') {
      option = { [option]: tags.titleize(option) }
    }
    var [val, text] = Object.entries(option)[0]
    return /* HTML */ `
      <label>
        <input
          type="radio"
          name="${name}"
          value="${val}"
          onclick="window.clearErrors(this)"
          ${value == val || i == 0 ? ' checked' : ''}
          ${tags.type(field)}
          ${tags.defaulty(field)}
        />
        ${esc(text)}
      </label>
    `
  }
  return /* HTML */ `
    <fieldset>
      ${tags.legend(field)} ${tags.desc(field)} ${(function () {
        if (options.length) {
          return options.map(renderOption).join('\n')
        }
        return `<span class="empty">${$.t('empty')}</span>`
      })()} ${tags.errors(field)}
    </fieldset>
  `
}
