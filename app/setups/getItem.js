module.exports = async function ($) {
  var id = $.query.id
  $.data.item = await $.db('item').get({ id })
  if (!$.data.item) {
    return /* HTML */ `<p>Item not found.</p>`
  }
}
