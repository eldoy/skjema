module.exports = function (model) {
  return async function ($) {
    if (model.fields) {
      var validations = {}
      for (var name in model.fields) {
        var value = model.fields[name]
        validations[name] = {}
        if (value.required) {
          validations[name].required = true
        }
      }
      await $.validate(validations)
    }
    var { values = {} } = $.params
    return await $.db(model.name).create(values)
  }
}
