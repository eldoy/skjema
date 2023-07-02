module.exports = function validations(model, action) {
  if (!model.fields) return
  var values = {}
  for (var name in model.fields) {
    var value = model.fields[name]
    values[name] = {}
    if (value.required && action == 'create') {
      values[name].required = true
    }
    if (
      ['string', 'password', 'text', 'radio', 'select'].includes(value.type)
    ) {
      values[name].is = 'string'
    }
    if (value.type == 'email') {
      values[name].is = 'email'
    }
    if (value.type == 'number') {
      values[name].is = 'number'
    }
    if (['bool', 'boolean'].includes(value.type)) {
      values[name].is = 'boolean'
    }
    if (value.type == 'file') {
      values[name].is = 'url'
    }
    if (value.type == 'date') {
      values[name].is = 'date'
    }
    if (value.type == 'color') {
      values[name].is = 'color'
    }
    if (value.type == 'checkbox') {
      values[name].is = 'array'
    }
    if (value.options) {
      values[name].in = value.options
    }
  }
  return values
}
