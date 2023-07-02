var { esc } = require('haka')

module.exports = function radio($, field = {}) {
  var { name = '', options = [], value = '' } = field
  function renderOption(option, i) {
    return /* HTML */ `
      <label>
        <input
          type="radio"
          name="${name}"
          value="${option}"
          ${option == value || i == 0 ? ' checked' : ''}
        />
        ${option}
      </label>
    `
  }
  var title = name[0].toUpperCase() + name.slice(1)
  return /* HTML */ `
    <fieldset>
      <legend>${esc(title)}</legend>
      ${options.map(renderOption).join('\n')}
      <em class="${name}-errors"></em>
    </fieldset>
  `
}
