module.exports = async function handleDelete(btn) {
  btn.disabled = true
  var query = serialize(btn.form)
  var result = await api('/content/delete', { query })
  if (!showErrors(result)) {
    cookie('flash', 'Content deleted')
    window.back()
  }
  btn.disabled = false
}
