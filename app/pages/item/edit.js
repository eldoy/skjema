module.exports = async function ($) {
  await $.setups(['getItem'])

  return /* HTML */ `<h1>Edit item</h1>
    ${$.app.form.build($, 'item', $.data.item)}`
}
