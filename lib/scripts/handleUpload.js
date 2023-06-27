module.exports = async function handleUpload(input) {
  var action = input.getAttribute('data-action')
  var id = input.id
  var options = {
    files: input.files,
    progress: function (event) {
      var { loaded, total, percent } = event
      text(
        `#${id}-progress`,
        `${(loaded / 1024).toFixed(2)} kB/${(total / 1024).toFixed(
          2
        )} kB, ${percent}%`
      )
    }
  }
  var result = await api(action, {}, options)
  if (!showErrors(result)) {
    var file = result[0]
    q(`#${id}-file`).value = file.url
    html(`#${id}-preview`, window.renderUploadImage(file))
  }
}
