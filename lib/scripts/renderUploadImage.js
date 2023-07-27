module.exports = function renderUploadImage(file, opt = {}) {
  var { size = 100 } = opt
  return /* HTML */ `<img
    src="${file.url}"
    style="height:${size}px"
    height="${size}"
    alt="${file.name || ''}"
  />`
}
