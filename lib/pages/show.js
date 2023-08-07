var { esc } = require('haka')

module.exports = async function ($, name, item) {
  if (!item || typeof item == 'string') {
    item = $.data[name] || {}
  }

  var model = $.app.schema.models[name]
  p(model.fields)

  function renderReference(ref) {
    return /* HTML */ `<li>
      ${esc(ref.label || ref.name || ref.title || ref.id || '')}?
    </li>`
  }

  var items = []
  for (var key in item) {
    var val = item[key]
    var source = model.fields[key]?.source
    if ($.db && source) {
      var ids = Array.isArray(val) ? val : [val]
      var sources = await $.db(source).find({ id: { $in: ids } })
      val = /* HTML */ `
        <ul>
          ${sources.map(renderReference).join('')}
        </ul>
      `
    } else {
      val = esc(val)
    }
    items.push(/* HTML */ `<dt>${esc(key)}</dt>
      <dd>${val}</dd> `)
  }

  return /* HTML */ `
    <div class="back">
      <a href="#" onclick="window.goBack();return false">
        ${$.t('back_to_list')}
      </a>
    </div>
    <h2>${$.t('show')} ${esc(name)}</h2>
    <dl>${items.join('')}</dl>
  `
}
