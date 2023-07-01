module.exports = function select($, name, { options = [], value = '' } = {}) {
  function renderOption(option) {
    return /* HTML */ `<option
      value="${option}"
      ${value == option ? ' selected' : ''}
    >
      ${option}
    </option>`
  }
  return /* HTML */ `
    <p>
      <label for="${name}">${name}</label>
      <select id="${name}" name="${name}">
        ${options.map(renderOption).join('\n')}
      </select>
      <em class="${name}-errors"></em>
    </p>
  `
}
