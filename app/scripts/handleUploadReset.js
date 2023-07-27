module.exports = function handleUploadReset(el) {
  el.value = ''
  var name = el.getAttribute('data-name')
  if (name) {
    var em = q(`.${name}-errors`, el.form)
    if (em) {
      text(em, '')
    }
    var progress = q(`.${name}-progress`, el.form)
    if (progress) {
      text(progress, '')
    }
  }
}
