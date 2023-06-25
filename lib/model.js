var lodash = require('lodash')

function model(schema) {
  var models = lodash.cloneDeep(schema.documents) || {}
  for (var name in models) {
    var doc = models[name]
    function build(obj) {
      for (var key in obj) {
        if (typeof obj[key] == 'object') {
          build(obj[key])
        } else if (typeof obj[key] == 'string' && obj[key][0] == '$') {
          obj[key] = { ...lodash.get(schema.objects, obj[key].slice(1)) }
        }
      }
    }
    build(doc)
    doc.name = doc.name || name
  }
  schema.models = models
  return models
}

module.exports = model
