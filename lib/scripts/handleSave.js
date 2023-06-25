module.exports = async function handleSave(btn) {
  console.log('Handling save')
  btn.disabled = true
  var values = serialize(btn.form)

  console.log({ values })
  console.log(btn.form)
  var action = btn.form.getAttribute('action')
  var params = { values }
  if (window.id) {
    params.query = { id }
  }
  var result = await api(action, params)

  if (!showErrors(result)) {
    cookie('flash', 'Content saved')
    window.back()
  }

  btn.disabled = false
}
