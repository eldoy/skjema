module.exports = async function handleSubmit(btn, opt = {}) {
  btn.disabled = true
  var form = btn.form
  opt = window.handleFormOptions(form, opt)
  var action = form.getAttribute('action')
  var query = window.handleQueryParams(form)
  var values = serialize(form)
  var payload = window.handlePayload(query, values)
  var result = await api(action, payload)
  btn.disabled = false
  if (handleShowErrors(form, result, opt)) {
    if (typeof opt.onerror == 'function') {
      await opt.onerror(result)
    }
  } else {
    if (typeof opt.onsave == 'function') {
      await opt.onsave(result)
    } else {
      window.handleRedirect(form)
    }
  }
}
