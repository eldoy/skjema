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
  var title = name[0].toUpperCase() + name.slice(1)
  return /* HTML */ `<label for="${name}">${esc(title)}${star(field)}</label>`
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

module.exports = {
  star,
  desc,
  label,
  errors,
  placeholder,
  type,
  defaulty,
  defaults,
  types
}