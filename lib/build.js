var lodash = require('lodash')
var scripts = require('./scripts')
var fields = require('./fields.js')
var elements = require('./elements')

module.exports = function form($, model, item) {
  if (typeof model == 'string') {
    model = $.app.schema.models[model]
  }
  model = lodash.cloneDeep(model)

  var tags = fields($, model, item)
  var action = `/${model.name}/${item ? 'update' : 'create'}`

  return /* HTML */ `
    <form action="${action}" onsubmit="return false">
      ${tags.map((x) => `<div class="field">${x}</div>`).join('\n')}
      ${elements.submit($)}
    </form>
    <script>
      window.id = '${item ? item.id : ''}'
      window.handleSave = ${scripts.handleSave}
      window.handleUpload = ${scripts.handleUpload}
      window.renderUploadImage = ${scripts.renderUploadImage}
    </script>
  `
}
