module.exports = async function handleSave(btn) {
  btn.disabled = true
  var form = btn.form
  var values = serialize(form)
  var params = { values }
  if (window.id) {
    params.query = { id }
  }
  var action = form.getAttribute('action')
  var result = await api(action, params)
  if (!showErrors(result)) {
    cookie('flash', $.t('saved'))
    window.back()
  }
  btn.disabled = false
}
