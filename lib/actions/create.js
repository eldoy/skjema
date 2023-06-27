module.exports = function (model) {
  return async function ($) {
    if (model.fields) {
      var values = {}
      for (var name in model.fields) {
        var value = model.fields[name]
        values[name] = {}
        if (value.required) {
          values[name].required = true
        }
      }
      await $.validate({ values })
    }
    var { values = {} } = $.params
    return await $.db(model.name).create(values)
  }
}
