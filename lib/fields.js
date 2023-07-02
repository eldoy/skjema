var lodash = require('lodash')
var elements = require('./elements')

module.exports = function fields($, model, item) {
  if (typeof model == 'string') {
    model = $.app.schema.models[model]
  }
  model = lodash.cloneDeep(model)

  var tags = []
  for (var name in model.fields) {
    var values = model.fields[name]
    if (item) {
      values.value = item[name] || ''
    }
    if (!values.type) {
      values.type = 'string'
    }
    var fn = elements[values.type]
    if (typeof fn == 'function') {
      tags.push(fn($, values))
    }
  }
  return tags
}
