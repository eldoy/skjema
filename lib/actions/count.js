var guards = require('../guards.js')

module.exports = function (model) {
  return async function ($) {
    await guards($, model)
    var { query = {} } = $.params
    var n = await $.db(model.name).count(query)
    return { n }
  }
}
