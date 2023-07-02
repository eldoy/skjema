module.exports = function defaults(field) {
  var { type = 'string' } = field

  if (type == 'bool') {
    return 'false'
  }

  if (type == 'number') {
    return '0'
  }

  if (type == 'checkbox') {
    return '[]'
  }

  return ''
}
