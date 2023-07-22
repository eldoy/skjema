var guards = require('../guards.js')

module.exports = function (model) {
  return async function ($) {
    await guards($, model)
    var { query = {}, fields = {}, sort = {}, skip = 0, limit = 0 } = $.params
    return await $.db(model.name).find(query, { fields, sort, skip, limit })
  }
}
