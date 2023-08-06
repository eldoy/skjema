var { esc } = require('haka')

module.exports = async function ($, name) {
  var item = $.data[name] || {}

  function renderItem(entry) {
    var [key, value] = entry
    return /* HTML */ `<dt>${esc(key)}</dt>
      <dd>${esc(value)}</dd>`
  }

  return /* HTML */ `
    <div class="back">
      <a href="#" onclick="window.goBack();return false">
        ${$.t('back_to_list')}
      </a>
    </div>
    <h2>Show ${esc(name)}</h2>
    <dl>${Object.entries(item).map(renderItem).join('')}</dl>
  `
}
