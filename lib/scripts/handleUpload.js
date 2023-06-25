module.exports = async function handleUpload(input) {
  console.log('Handling upload')
  console.log(input)
  var id = input.id
  console.log({ id })
  var options = {
    files: input.files,
    progress: function (event) {
      var { loaded, total, percent } = event
      console.log(event)
      text(
        `#${id}-progress`,
        `${(loaded / 1024).toFixed(2)} kB/${(total / 1024).toFixed(
          2
        )} kB, ${percent}%`
      )
    }
  }
  var result = await api('/upload/create', {}, options)

  console.log(result)

  if (!showErrors(result)) {
    var file = result[0]
    q(`#${id}-file`).value = file.url
    html(`#${id}-preview`, renderUploadImage(file))
  }
}
