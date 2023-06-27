module.exports = function (model) {
  return async function ($) {
    if (model.fields) {
      var values = {}
      for (var name in model.fields) {
        var value = model.fields[name]
        values[name] = {}
      }
      await $.validate({ values })
    }
    var { query = {}, values = {} } = $.params
    return await $.db(model.name).update(query, values)
  }
}
