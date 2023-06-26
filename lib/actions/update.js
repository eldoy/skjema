module.exports = function (model) {
  return async function ($) {
    if (model.fields) {
      var validations = {}
      for (var name in model.fields) {
        var value = model.fields[name]
        validations[name] = {}
      }
      await $.validate(validations)
    }
    var { query = {}, values = {} } = $.params
    return await $.db(model.name).update(query, values)
  }
}
