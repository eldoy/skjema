module.exports = async function handleDelete(btn) {
  btn.disabled = true
  var query = serialize(btn.form)
  var result = await api(form.action, { query })
  if (!showErrors(result)) {
    cookie('flash', 'Deleted successfully')
    window.back()
  }
  btn.disabled = false
}
