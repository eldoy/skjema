module.exports = async function ($) {
  var id = $.query.id
  $.data.project = await $.db('project').get({ id })
  if (!$.data.project) {
    return /* HTML */ `<p>Project not found.</p>`
  }
}
