module.exports = function validations(model, action) {
  if (!model.fields) return

  var values = {}
  for (var name in model.fields) {
    var field = model.fields[name]
    values[name] = {}
    if (field.required && action == 'create') {
      values[name].required = true
    }
    if (
      ['text', 'password', 'textarea', 'radio', 'select'].includes(field.type)
    ) {
      values[name].is = 'string'
    }
    if (field.type == 'email') {
      values[name].is = 'email'
    }
    if (field.type == 'number') {
      values[name].is = 'number'
    }
    if (['bool', 'boolean'].includes(field.type)) {
      values[name].is = 'boolean'
    }
    if (field.type == 'file') {
      values[name].is = 'url'
    }
    if (field.type == 'date') {
      values[name].is = 'date'
    }
    if (field.type == 'color') {
      values[name].is = 'color'
    }
    if (field.type == 'checkbox') {
      values[name].is = 'array'
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
      values[name].in = options
    }
  }
  return values
}
