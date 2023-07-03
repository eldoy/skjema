module.exports = function handleUploadReset(el) {
  console.log('Resetting upload')
  el.value = ''
  var name = el.getAttribute('id')
  window.text(`.${name}-errors`, '')
}
