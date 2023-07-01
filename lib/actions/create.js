var validations = require('../validations.js')

module.exports = function (model) {
  return async function ($) {
    var rules = validations(model, 'create')
    if (rules) {
      await $.validate(rules)
    }
    var { values = {} } = $.params
    return await $.db(model.name).create(values)
  }
}
