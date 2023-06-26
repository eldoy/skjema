module.exports = function text($, name, { placeholder = '', value = '' } = {}) {
  return /* HTML */ `
    <p>
      <label for="${name}">${name}</label>
      <textarea
        id="${name}"
        name="${name}"
        placeholder="${placeholder}"
        ${value ? 'data-default=""' : ''}
      >${value}</textarea>
      <em class="${name}-errors"></em>
    </p>
  `
}
