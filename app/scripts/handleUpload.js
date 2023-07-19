module.exports = async function handleUpload(input) {
  var action = input.getAttribute('data-action')
  var id = input.getAttribute('id')
  var options = {
    files: input.files,
    progress: function (event) {
      window.handleUploadProgress(id, event)
    }
  }
  var result = await api(action, {}, options)
  if (!showErrors(result)) {
    var file = result[0]
    q(`#${id}-file`).value = file.url
    html(`.${id}-image`, window.renderUploadImage(file))
  }
}
