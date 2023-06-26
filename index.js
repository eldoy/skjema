var loader = require('conficurse')

module.exports = loader.load('./lib')

// module.exports = {
//   model: require('./lib/model.js'),
//   form: require('./lib/form.js'),
//   fields: {
//     checkbox: require('./lib/fields/checkbox.js'),
//     file: require('./lib/fields/file.js'),
//     radio: require('./lib/fields/radio.js'),
//     select: require('./lib/fields/select.js'),
//     string: require('./lib/fields/string.js'),
//     text: require('./lib/fields/text.js')
//   },
//   scripts: {
//     handleDelete: require('./lib/scripts/handleDelete.js'),
//     handleSave: require('./lib/scripts/handleSave.js'),
//     handleUpload: require('./lib/scripts/handleUpload.js'),
//     renderUploadImage: require('./lib/scripts/renderUploadImage.js')
//   }
// }
