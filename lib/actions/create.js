module.exports = function (model) {
  return async function ($) {
    var { values = {} } = $.params
    return await $.db(model.name).create(values)
  }
}
