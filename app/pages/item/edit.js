module.exports = async function ($) {
  await $.setups(['getItem'])
  return $.app.form.pages.edit($)
}
