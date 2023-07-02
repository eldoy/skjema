module.exports = function (field) {
  var { type = 'string' } = field
  if (['bool', 'date', 'number'].includes(type)) {
    return type
  }

  if (type == 'checkbox') {
    return 'array'
  }

  return ''
}