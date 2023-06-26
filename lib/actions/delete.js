module.exports = function (model) {
  return async function ($) {
    var { query = {} } = $.params
    return await $.db(model.name).delete(query)
  }
}
