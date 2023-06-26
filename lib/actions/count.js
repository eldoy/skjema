module.exports = function (model) {
  return async function ($) {
    var { query = {} } = $.params
    var n = await $.db(model.name).count(query)
    return { n }
  }
}
