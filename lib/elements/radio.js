var { esc } = require('haka')

module.exports = function radio($, field = {}) {
  var { name = '', options = [], value = '' } = field
  function renderOption(option, i) {
    if (typeof option == 'string') {
      option = {
        [option]: option[0].toUpperCase() + option.slice(1)
      }
    }
    var [val, text] = Object.entries(option)[0]
    return /* HTML */ `
      <label>
        <input
          type="radio"
          name="${name}"
          value="${val}"
          ${value == val || i == 0 ? ' checked' : ''}
        />
        ${esc(text)}
      </label>
    `
  }
  var title = name[0].toUpperCase() + name.slice(1)
  return /* HTML */ `
    <fieldset>
      <legend>
        ${esc(title)}${field.required ? ` <span class="star">*</span>` : ''}
      </legend>
      ${options.map(renderOption).join('\n')}
      <em class="${name}-errors"></em>
    </fieldset>
  `
}
