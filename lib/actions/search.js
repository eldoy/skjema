module.exports = function (model) {
  return async function ($) {
    var {
      search = '',
      query = {},
      fields = {},
      sort = { created_at: -1 },
      skip,
      limit
    } = $.params
    var regexp = new RegExp(search, 'i')
    var items = await $.db(model.name).find(
      {
        ...query,
        $or: [{ name: regexp }, { title: regexp }]
      },
      { fields, sort, skip, limit }
    )
    return items
  }
}
