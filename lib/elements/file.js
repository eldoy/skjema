var tags = require('../tags.js')

module.exports = function file($, field = {}) {
  var { name = '', value = '', action = '/upload/create', size = 100 } = field
  if (typeof value == 'string') {
    value = { url: value }
  }
  return /* HTML */ `
    <input class="${name}-file" name="${name}" type="hidden" />
    <div class="${name}-image">
      ${(function () {
        if (value.url) {
          return tags.uploadImage(value, { size })
        }
        return ''
      })()}
    </div>
    <p>
      ${tags.label(field)}
      <input
        class="${name}-field"
        type="file"
        onclick="window.handleUploadReset(this)"
        onchange="window.handleUpload(this)"
        data-name="${name}"
        data-action="${action}"
        data-size="${size}"
      />
      ${tags.progress(field)} ${tags.errors(field)}
    </p>
  `
}
