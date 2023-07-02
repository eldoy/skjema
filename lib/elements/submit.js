module.exports = function submit($) {
  return /* HTML */ `<p class="buttons">
    <button onclick="handleSave(this)">${$.t ? $.t('save') : 'Save'}</button>
    <a href="javascript:void(0)" onclick="window.back()">
      ${$.t ? $.t('cancel') : 'Cancel'}
    </a>
  </p>`
}
