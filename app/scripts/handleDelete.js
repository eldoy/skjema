module.exports = async function handleDelete(btn) {
  btn.disabled = true
  var form = btn.form
  var query = serialize(form)
  var params = { query }
  var action = form.getAttribute('action')
  var result = await api(action, params)
  if (!showErrors(result)) {
    cookie('flash', $.t('deleted'))
    window.back()
  }
  btn.disabled = false
}
