module.exports = function renderUploadImage(file, { size = 100 }) {
  return /* HTML */ `<img src="${file.url}" style="height:${size}px" height="${size}" />`
}
