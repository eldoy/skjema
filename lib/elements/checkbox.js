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
  return /* HTML */ `
    <fieldset>
      <legend>${name}</legend>
      ${options.map(renderOption).join('\n')}
      <em class="${name}-errors"></em>
    </fieldset>
  `
}
