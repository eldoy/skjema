module.exports = function handleUploadProgress(id, event) {
  var { loaded, total, percent } = event
  loaded = `${(loaded / 1024).toFixed(2)} kB`
  total = `${(total / 1024).toFixed(2)} kB`
  window.text(`#${id}-progress`, `${loaded}/${total}, ${percent}%`)
}
