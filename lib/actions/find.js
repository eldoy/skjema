module.exports = function (model) {
  return async function ($) {
    var { query = {}, fields = {}, sort = {}, skip = 0, limit = 0 } = $.params
    return await $.db(model.name).find(query, { fields, sort, skip, limit })
  }
}
