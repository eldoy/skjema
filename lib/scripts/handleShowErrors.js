module.exports = function handleShowErrors(form, result, opt = {}) {
  if (!result.error) return
  qa('em', form, function (el) {
    text(el, '')
  })
  flash(result.error.message, opt)
  for (var key in result) {
    if (key != 'error') {
      for (var field in result[key]) {
        var em = q(`.${field}-errors`, form)
        var val = result[key][field][0]
        if (em && val) {
          text(em, val)
        }
      }
    }
  }
  return true
}
