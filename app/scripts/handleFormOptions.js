module.exports = function handleFormOptions(form, opt = {}) {
  if (typeof opt.scroll == 'undefined') {
    opt.scroll = form.getAttribute('data-scroll') == 'true' ? true : false
  }
  return opt
}
