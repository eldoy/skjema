var { esc } = require('haka')
var renderUploadImage = require('../scripts/renderUploadImage.js')

module.exports = function file($, field = {}) {
  var { name = '', value = '', action = '/upload/create', size = 100 } = field
  if (typeof value == 'string') {
    value = { url: value }
  }
  var title = name[0].toUpperCase() + name.slice(1)
  return /* HTML */ `
    <div id="${name}-preview">
      ${(function () {
        if (value.url) {
          return renderUploadImage(value, { size })
        }
        return ''
      })()}
    </div>
    <p>
      <label for="${name}">
        ${esc(title)}${field.required ? `<span class="star">*</span>` : ''}
      </label>
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
