var lodash = require('lodash')
var handleSave = require('./scripts/handleSave.js')
var handleUpload = require('./scripts/handleUpload.js')
var renderUploadImage = require('./scripts/renderUploadImage.js')
var fields = {
  checkbox: require('./fields/checkbox.js'),
  file: require('./fields/file.js'),
  radio: require('./fields/radio.js'),
  select: require('./fields/select.js'),
  string: require('./fields/string.js'),
  text: require('./fields/text.js'),
  submit: require('./fields/text.js')
}

module.exports = function form($, model, item) {
  if (typeof model == 'string') {
    model = $.app.schema.models[model]
  }
  model = lodash.cloneDeep(model)

  var elements = []
  for (var name in model.fields) {
    var values = model.fields[name]
    if (item) {
      values.value = item[name] || ''
    }
    var { type = 'string' } = values
    var fn = fields[type]
    if (typeof fn == 'function') {
      elements.push(fn($, name, values))
    }
  }

  var action = `/${model.name}/${item ? 'update' : 'create'}`

  return /* HTML */ `
    <form action="${action}" onsubmit="return false">
      ${elements.map((x) => `<div class="field">${x}</div>`).join('\n')}
      ${fields.submit($)}
    </form>
    <script>
      window.id = '${item ? item.id : ''}'
      window.handleSave = ${handleSave}
      window.handleUpload = ${handleUpload}
      window.renderUploadImage = ${renderUploadImage}
    </script>
  `
}
