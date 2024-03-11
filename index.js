module.exports = {
  model: require('./lib/model.js'),
  build: require('./lib/build.js'),
  fields: require('./lib/fields.js'),
  tags: require('./lib/tags.js'),
  validations: require('./lib/validations.js'),
  actions: require('./lib/actions'),
  pages: require('./lib/pages'),
  ...require('./lib/elements')
}
