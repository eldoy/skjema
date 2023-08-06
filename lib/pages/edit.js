module.exports = async function ($) {
  return /* HTML */ `<h1>Edit item</h1>
    ${await $.app.form.build($, 'item', $.data.item)}`
}
