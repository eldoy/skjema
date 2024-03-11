var lodash = require('lodash')
var scripts = require('./scripts')
var fields = require('./fields.js')
var elements = require('./elements')

module.exports = function build($, model, item, opt = {}) {
  if (typeof model == 'string') {
    model = $.app.schema.models[model]
  }
  model = lodash.cloneDeep(model)

  // Find fields with source
  var sourcefields = []
  if ($.db) {
    for (var name in model.fields) {
      var field = model.fields[name]
      if (field.source) {
        sourcefields.push(field)
      }
    }
  }

  function generateHTML() {
    var tags = fields($, model, item)
    var action = opt.action || `/${model.name}/${item ? 'update' : 'create'}`

    return /* HTML */ `
      <form
        class="form"
        action="${action}"
        onsubmit="return false"
        data-query="${opt.query || 'id'}"
        data-message="${opt.message || $.t(`${model.name}.saved`)}"
      >
        ${tags.map((x) => `<div class="field">${x}</div>`).join('\n')}
        ${elements.submit($)}
      </form>
      <script>
        window.handleSubmit = ${scripts.handleSubmit}
        window.handleUpload = ${scripts.handleUpload}
        window.handleUploadReset = ${scripts.handleUploadReset}
        window.renderUploadImage = ${scripts.renderUploadImage}
      </script>
    `
  }

  if (sourcefields.length) {
    return new Promise(async function (resolve) {
      for (var field of sourcefields) {
        var { source } = field
        var data = await $.db(source).find()
        field.options = data.map(function (x) {
          return { [x.id]: x.label || x.name || x.title || x.id || '' }
        })
      }
      resolve(generateHTML())
    })
  }
  return generateHTML()
}
