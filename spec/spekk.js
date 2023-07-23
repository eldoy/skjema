var skjema = require('../index.js')

module.exports = async function ({ data }) {
  var models = skjema.model(data.schema)
  var $ = { t: (key) => key }
  return { skjema, models, $ }
}
