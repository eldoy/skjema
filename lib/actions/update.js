var validations = require('../validations.js')

module.exports = function (model) {
  return async function ($) {
    var rules = validations(model, 'update')
    await $.validate({
      query: {
        id: {
          required: true,
          is: 'id'
        }
      },
      values: rules
    })
    var { query = {}, values = {} } = $.params
    return await $.db(model.name).update(query, values)
  }
}
