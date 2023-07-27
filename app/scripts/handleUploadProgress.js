module.exports = function handleUploadProgress(input, event) {
  var name = input.getAttribute('data-name')
  if (!name) return
  var { loaded, total, percent } = event
  loaded = `${(loaded / 1024).toFixed(2)} kB`
  total = `${(total / 1024).toFixed(2)} kB`
  var progress = q(`.${name}-progress`, input.form)
  if (progress) {
    text(progress, `${loaded}/${total}, ${percent}%`)
  }
}
