module.exports = async function handleDelete(btn) {
  btn.disabled = true
  var query = serialize(btn.form)
  var action = btn.form.getAttribute('action')
  var result = await api(action, { query })
  if (!showErrors(result)) {
    cookie('flash', 'Deleted successfully')
    window.back()
  }
  btn.disabled = false
}
