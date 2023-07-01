var validations = require('../validations.js')

module.exports = function (model) {
  return async function ($) {
    var rules = validations(model, 'update')
    if (rules) {
      await $.validate(rules)
    }
    var { query = {}, values = {} } = $.params
    return await $.db(model.name).update(query, values)
  }
}
