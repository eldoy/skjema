module.exports = function handleRedirect(form, opt = {}) {
  var message = form.getAttribute('data-message')
  var redirect = form.getAttribute('data-redirect') || 'back'
  if (redirect == 'none') {
    if (message) {
      flash(message, opt)
    }
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
