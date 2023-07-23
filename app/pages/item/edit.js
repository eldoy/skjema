module.exports = async function ($) {
  await $.setups(['getItem'])

  return /* HTML */ `<h1>Edit item</h1>
    ${await $.app.form.build($, 'item', $.data.item)}`
}
