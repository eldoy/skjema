module.exports = function string($, field = {}) {
  var { name = '', value = '' } = field
  return /* HTML */ `
    <p>
      <label for="${name}">${name}</label>
      <input
        id="${name}"
        name="${name}"
        type="color"
        value="${value}"
        ${value ? 'data-default=""' : ''}
      />
      <em class="${name}-errors"></em>
    </p>
  `
}
