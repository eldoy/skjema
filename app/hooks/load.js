var skjema = require(process.cwd() + '/index.js')

module.exports = async function (app) {
  app.actions = {}
  skjema.model(app.schema, app.actions)
  app.form = skjema
}
