var lodash = require('lodash')
var scripts = require('./scripts')
var fields = require('./fields.js')
var elements = require('./elements')

module.exports = function build($, model, item) {
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
    var action = `/${model.name}/${item ? 'update' : 'create'}`

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

  if (sourcefields.length) {
    return new Promise(async function (resolve) {
      for (var sf of sourcefields) {
        sf.options = await $.db(sf.source).find()
      }
      resolve(generateHTML())
    })
  }
  return generateHTML()
}
