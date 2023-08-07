var validators = require('./validators.json')

module.exports = function validations(model, action) {
  if (!model.fields) return

  var val = {}
  for (var name in model.fields) {
    var field = model.fields[name]
    val[name] = {}

    for (var key in field) {
      if (validators.includes(key)) {
        val[name][key] = field[key]
      }
    }

    if (field.required && action == 'create') {
      val[name].required = true
    }
    if (
      ['text', 'password', 'textarea', 'radio', 'select'].includes(field.type)
    ) {
      val[name].is = 'string'
    }
    if (field.type == 'email') {
      val[name].is = 'email'
    }
    if (field.type == 'number') {
      val[name].is = 'number'
    }
    if (['bool', 'boolean'].includes(field.type)) {
      val[name].is = 'boolean'
    }
    if (field.type == 'file') {
      val[name].is = 'url'
    }
    if (field.type == 'date') {
      val[name].is = 'date'
    }
    if (field.type == 'color') {
      val[name].is = 'color'
    }
    if (field.type == 'checkbox') {
      val[name].is = 'array'
    }
    if (
      Array.isArray(field.options) &&
      ['radio', 'select', 'checkbox'].includes(field.type)
    ) {
      var options = field.options.map(function (option) {
        if (typeof option == 'object') {
          return Object.entries(option)[0]
        }
        return option
      })
      val[name].in = options
    }
  }
  return val
}
