module.exports = async function handleSave(btn, opt = {}) {
  btn.disabled = true
  var form = btn.form
  var query = form.getAttribute('query') || ''
  if (query.startsWith('window.')) {
    var name = query.split('.')[1]
    query = window[name]
  } else {
    var names = query.split(' ').map((x) => x.trim())
    query = {}
    for (var name of names) {
      var [a, n] = name.split(':')
      if (a) {
        query[a] = window.params(n ? parseInt(n) : a)
      }
    }
  }
  var values = serialize(form)
  var package = {}
  if (Object.keys(query).length) {
    package.query = query
  }
  if (Object.keys(values).length) {
    package.values = values
  }
  console.log(JSON.stringify(package))
  var action = form.getAttribute('action')
  var result = await api(action, package)
  btn.disabled = false
  if (showErrors(result)) {
    if (typeof opt.onerror == 'function') {
      await opt.onerror(result)
    }
  } else {
    if (typeof opt.onsave == 'function') {
      await opt.onsave(result)
    } else {
      var message = form.getAttribute('data-message') || $.t('saved')
      var redirect = form.getAttribute('data-redirect') || 'back'
      if (redirect == 'none') {
        flash(message)
      } else {
        if (!/https?:/.test(redirect)) {
          cookie('flash', message)
        }
        if (redirect == 'back') {
          window.back()
        } else if (redirect == 'reload') {
          window.location = window.location.href
        } else {
          window.location = redirect
        }
      }
    }
  }
}
