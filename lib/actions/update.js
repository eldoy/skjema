module.exports = function (model) {
  return async function ($) {
    var { query = {}, values = {} } = $.params
    return await $.db(model.name).update(query, values)
  }
}
