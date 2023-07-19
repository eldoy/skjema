module.exports = async function ($) {
  $.data.items = await $.db('item').find()
}
