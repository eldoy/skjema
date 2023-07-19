const dugg = require('dugg')

module.exports = function (app) {
  return dugg(app.config.upload)
}
