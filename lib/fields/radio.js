module.exports = function radio(name, { options = [], value = '' } = {}) {
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
  return /* HTML */ `
    <fieldset>
      <legend>${name}</legend>
      ${options.map(renderOption).join('\n')}
      <em class="${name}-errors"></em>
    </fieldset>
  `
}
