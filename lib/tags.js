var { esc } = require('haka')

function star(field) {
  if (field.required) {
    return /* HTML */ ` <span class="star">*</span>`
  }
  return ''
}

function desc(field) {
  if (field.desc) {
    return /* HTML */ `<div class="desc">
      <small>${esc(field.desc)}</small>
    </div>`
  }
  return ''
}

function label(field) {
  var { name = '' } = field
  return /* HTML */ `<label for="${name}">
    ${esc(titleize(name))}${star(field)}
  </label>`
}

function legend(field) {
  var { name = '' } = field
  return /* HTML */ `<legend>${esc(titleize(name))}${star(field)}</legend>`
}

function progress(field) {
  var { name = '' } = field
  return /* HTML */ `<span class="progress ${name}-progress"></span>`
}

function errors(field) {
  var { name = '' } = field
  return /* HTML */ `<em class="${name}-errors"></em>`
}

function placeholder(field) {
  if (typeof field.placeholder != 'undefined') {
    return `placeholder="${field.placeholder}"`
  }
  return ''
}

function type(field) {
  var t = types(field)
  if (t) {
    return `data-type="${t}"`
  }
  return ''
}

function defaulty(field) {
  if (typeof field.value != 'undefined') {
    var d = defaults(field)
    if (typeof d != 'undefined') {
      return `data-default="${d}"`
    }
  }
  return ''
}

function defaults(field) {
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

  if (type == 'color') {
    return '#000000'
  }

  return ''
}

function types(field) {
  var { type = 'string' } = field
  if (['bool', 'date', 'number'].includes(type)) {
    return type
  }

  if (type == 'checkbox') {
    return 'array'
  }

  return ''
}

function titleize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

module.exports = {
  star,
  desc,
  label,
  legend,
  errors,
  progress,
  placeholder,
  type,
  defaulty,
  defaults,
  types,
  titleize
}
