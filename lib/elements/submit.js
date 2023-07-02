module.exports = function submit($) {
  return /* HTML */ `<p class="buttons">
    <a href="javascript:void(0)" onclick="window.back()">
      ${$.t ? $.t('form.cancel') : 'Cancel'}
    </a>
    <button onclick="handleSave(this)">
      ${$.t ? $.t('form.save') : 'Save'}
    </button>
  </p>`
}
