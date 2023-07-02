module.exports = function date($, field = {}) {
  var { name = '', placeholder = '', value = '' } = field
  return /* HTML */ `
    <p>
      <label for="${name}">${name}</label>
      <input
        id="${name}"
        name="${name}"
        type="date"
        placeholder="${placeholder}"
        value="${value}"
        ${value ? 'data-default=""' : ''}
      />
      <em class="${name}-errors"></em>
    </p>
  `
}
