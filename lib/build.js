var lodash = require('lodash')
var scripts = require('./scripts')
var fields = require('./fields.js')
var elements = require('./elements')

module.exports = async function build($, model, item) {
  if (typeof model == 'string') {
    model = $.app.schema.models[model]
  }
  model = lodash.cloneDeep(model)

  // Find fields with source
  if ($.db) {
    for (var name in model.fields) {
      var field = model.fields[name]
      var { source } = field
      if (source) {
        var data = await $.db(source).find()
        field.options = data.map(function (x) {
          return { [x.id]: x.label || x.name || x.title || x.id || '' }
        })
      }
    }
  }

  var tags = fields($, model, item)
  var action = `/${model.name}/${item ? 'update' : 'create'}`
  var title = model.name[0].toUpperCase() + model.name.slice(1)

  return /* HTML */ `
    <form
      class="form"
      action="${action}"
      onsubmit="return false"
      data-query="id"
      data-message="${$.t(`save.${model.name}`)}"
    >
      ${tags.map((x) => `<div class="field">${x}</div>`).join('\n')}
      ${elements.submit($)}
    </form>
    <script>
      window.handleSave = ${scripts.handleSave}
      window.handleUpload = ${scripts.handleUpload}
      window.handleUploadReset = ${scripts.handleUploadReset}
      window.renderUploadImage = ${scripts.renderUploadImage}
    </script>
  `
}
