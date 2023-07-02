var { esc } = require('haka')

module.exports = function checkbox($, field = {}) {
  var { name = '', options = [], value = [] } = field
  function renderOption(option) {
    return /* HTML */ `
      <label>
        <input
          type="checkbox"
          name="${name}"
          value="${option}"
          ${value.includes(option) ? ' checked' : ''}
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
