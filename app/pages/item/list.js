module.exports = async function ($) {
  await $.setups(['itemList'])
  return $.app.form.pages.list($, 'item', 'items')
}
