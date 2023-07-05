var tags = require('../tags.js')
var renderUploadImage = require('../scripts/renderUploadImage.js')

module.exports = function file($, field = {}) {
  var { name = '', value = '', action = '/upload/create', size = 100 } = field
  if (typeof value == 'string') {
    value = { url: value }
  }
  return /* HTML */ `
    <input id="${name}-file" name="${name}" type="hidden" />
    <div class="${name}-image">
      ${(function () {
        if (value.url) {
          return renderUploadImage(value, { size })
        }
        return ''
      })()}
    </div>
    <p>
      ${tags.label(field)}
      <input
        id="${name}"
        type="file"
        onclick="window.handleUploadReset(this)"
        onchange="window.handleUpload(this)"
        data-action="${action}"
      />
      ${tags.progress(field)} ${tags.errors(field)}
    </p>
  `
}
