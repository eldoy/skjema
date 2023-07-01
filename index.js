module.exports = {
  model: require('./lib/model.js'),
  build: require('./lib/build.js'),
  fields: require('./lib/fields.js'),
  validations: require('./lib/validations.js'),
  actions: require('./lib/actions'),
  scripts: require('./lib/scripts'),
  ...require('./lib/elements')
}
