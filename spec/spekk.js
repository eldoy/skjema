const skjema = require('../index.js')

module.exports = async function ({ data }) {
  let models = skjema.model(data.schema)
  return { skjema, models }
}
