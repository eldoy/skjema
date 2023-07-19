module.exports = function handleUploadReset(el) {
  console.log('Resetting upload custom')
  el.value = ''
  var name = el.getAttribute('id')
  window.text(`.${name}-errors`, '')
  window.text(`#${name}-progress`, '')
}
