var { esc } = require('haka')

module.exports = async function ($, name) {
  return /* HTML */ `<h1>Edit ${esc(name)}</h1>
    ${await $.app.form.build($, name, $.data[name])}`
}
