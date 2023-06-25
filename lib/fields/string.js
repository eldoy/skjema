module.exports = function string(name, { placeholder = '', value = '' }) {
  return /* HTML */ `
    <p>
      <label for="${name}">${name}</label>
      <input
        id="${name}"
        name="${name}"
        type="text"
        placeholder="${placeholder}"
        value="${value}"
        ${value ? 'data-default=""' : ''}
      />
      <em class="${name}-errors"></em>
    </p>
  `
}
