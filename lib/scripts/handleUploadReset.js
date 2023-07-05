module.exports = function handleUploadReset(el) {
  el.value = ''
  var name = el.getAttribute('id')
  window.text(`.${name}-errors`, '')
  window.text(`#${name}-progress`, '')
}
