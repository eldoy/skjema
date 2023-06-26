var skjema = require('../../index.js')

module.exports = function file($, name, { value = '' } = {}) {
  return /* HTML */ `
    <div id="${name}-preview">
      ${(function () {
        if (value) {
          return skjema.scripts.renderUploadImage({ url: value })
        }
        return ''
      })()}
    </div>
    <p>
      <label for="${name}">${name}</label>
      <input id="${name}" type="file" onchange="handleUpload(this)" />
      <span class="progress" id="${name}-progress"></span>
      <em class="${name}-errors"></em>
    </p>
    <input id="${name}-file" name="${name}" type="hidden" />
  `
}
