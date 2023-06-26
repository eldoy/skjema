module.exports = async function handleSave(btn) {
  btn.disabled = true
  var values = serialize(btn.form)
  var action = btn.form.getAttribute('action')
  var params = { values }
  if (window.id) {
    params.query = { id }
  }
  var result = await api(action, params)
  if (!showErrors(result)) {
    cookie('flash', 'Saved successfully')
    window.back()
  }
  btn.disabled = false
}
