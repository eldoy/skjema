module.exports = async function handleUpload(input) {
  var action = input.getAttribute('data-action')
  var size = input.getAttribute('data-size')
  var name = input.getAttribute('data-name')
  var options = {
    files: input.files,
    progress: function (event) {
      window.handleUploadProgress(input, event)
    }
  }
  var result = await api(action, {}, options)
  if (!window.handleShowErrors(input.form, result)) {
    var file = result[0]
    q(`.${name}-file`).value = file.url
    html(`.${name}-image`, window.renderUploadImage(file, { size }))
  }
}
