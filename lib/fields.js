var lodash = require('lodash')
var elements = require('./elements')

module.exports = function ($, model, item) {
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
    var { type = 'string' } = values
    var fn = elements[type]
    if (typeof fn == 'function') {
      tags.push(fn($, name, values))
    }
  }
  return tags
}
