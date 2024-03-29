var lodash = require('lodash')
var builtins = require('./actions')

module.exports = function model(schema, actions = {}) {
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

    for (var field in doc.fields) {
      doc.fields[field].name = field

      var { type, action } = doc.fields[field]
      if (type == 'file' && !action) {
        doc.fields[field].action = `/${name}/upload`
      }
    }
  }

  for (var name in models) {
    if (!actions[name]) {
      actions[name] = {}
    }
    for (var action in builtins) {
      if (
        !actions[name][action] &&
        (!doc.actions || doc.actions.includes(action))
      ) {
        actions[name][action] = builtins[action](models[name])
      }
    }
  }

  return (schema.models = models)
}
