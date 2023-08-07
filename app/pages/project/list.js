module.exports = async function ($) {
  await $.setups(['projectList'])
  return $.app.form.pages.list($, 'project', 'projects')
}
