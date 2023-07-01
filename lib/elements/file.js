var renderUploadImage = require('../scripts/renderUploadImage.js')

module.exports = function file(
  $,
  name,
  { value, action = '/upload/create' } = {}
) {
  if (typeof value == 'string') {
    value = { url: value }
  }
  return /* HTML */ `
    <div id="${name}-preview">
      ${(function () {
        if (value) {
          return renderUploadImage(value)
        }
        return ''
      })()}
    </div>
    <p>
      <label for="${name}">${name}</label>
      <input
        id="${name}"
        type="file"
        onchange="handleUpload(this)"
        data-action="${action}"
      />
      <span class="progress" id="${name}-progress"></span>
      <em class="${name}-errors"></em>
    </p>
    <input id="${name}-file" name="${name}" type="hidden" />
  `
}
