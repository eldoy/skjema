var { esc } = require('haka')

module.exports = async function ($, name, item, opt = {}) {
  if (!item || typeof item == 'string') {
    item = $.data[name] || {}
  }
  return /* HTML */ `<h1>${$.t('delete_title')} ${esc(name)}</h1>
    <p>
      ${$.t('really_delete')}
      ${esc(item.label || item.name || item.title || item.id || name)}?
    </p>
    <form
      action="${opt.action || `/${name}/delete`}"
      onsubmit="return false"
      data-query="${opt.query || 'id'}"
      data-message="${opt.message || $.t(`${name}.deleted`)}"
    >
      <button onclick="window.handleSave(this)">${$.t('delete')}</button>
      <a href="#" onclick="window.goBack();return false">${$.t('cancel')}</a>
    </form>
    <script>
      window.handleSave = ${$.app.scripts.handleSave}
    </script>`
}
