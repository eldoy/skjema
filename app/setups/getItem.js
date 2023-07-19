module.exports = async function ($) {
  var id = $.query.id
  console.log({ id })
  $.data.item = await $.db('item').get({ id })
  if (!$.data.item) {
    return /* HTML */ `<p>Item not found.</p>`
  }
}
