module.exports = {
  model: require('./lib/model.js'),
  form: require('./lib/form.js'),
  actions: {
    count: require('./lib/actions/count.js'),
    create: require('./lib/actions/create.js'),
    delete: require('./lib/actions/delete.js'),
    find: require('./lib/actions/find.js'),
    get: require('./lib/actions/get.js'),
    search: require('./lib/actions/search.js'),
    update: require('./lib/actions/update.js'),
    upload: require('./lib/actions/upload.js')
  },
  fields: {
    checkbox: require('./lib/fields/checkbox.js'),
    file: require('./lib/fields/file.js'),
    radio: require('./lib/fields/radio.js'),
    select: require('./lib/fields/select.js'),
    string: require('./lib/fields/string.js'),
    text: require('./lib/fields/text.js'),
    password: require('./lib/fields/password.js'),
    email: require('./lib/fields/email.js'),
    date: require('./lib/fields/date.js'),
    color: require('./lib/fields/color.js')
  },
  scripts: {
    handleDelete: require('./lib/scripts/handleDelete.js'),
    handleSave: require('./lib/scripts/handleSave.js'),
    handleUpload: require('./lib/scripts/handleUpload.js'),
    renderUploadImage: require('./lib/scripts/renderUploadImage.js')
  }
}
