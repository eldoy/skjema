module.exports = async function ($) {
  return /* HTML */ `<h1>New item</h1>
    ${await $.app.form.build($, 'item')}`
}
