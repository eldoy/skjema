module.exports = function (model) {
  return async function ($) {
    await $.validate({
      query: {
        id: {
          required: true,
          is: 'id'
        }
      }
    })
    var { query = {} } = $.params
    return await $.db(model.name).delete(query)
  }
}
