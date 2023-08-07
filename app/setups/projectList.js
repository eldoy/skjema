module.exports = async function ($) {
  $.data.projects = await $.db('project').find()
}
