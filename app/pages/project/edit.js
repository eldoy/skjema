module.exports = async function ($) {
  await $.setups(['getProject'])
  return $.app.form.pages.edit($, 'project')
}
