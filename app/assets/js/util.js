window.load = async function (path, into) {
  var res = await fetch(path)
  res = await res.text()
  if (into) {
    var el = html(into, res)
    qa('script', el, function (script) {
      if (!script.loaded) {
        script.loaded = true
        eval(script.textContent)
      }
    })
  }
  return res
}

window.sleep = function (time, s = 0.5) {
  return new Promise((r) => setTimeout(r, s * 1000))
}

window.track = function () {
  var t = store('track') || []
  var path = location.pathname + location.search
  if (t[t.length - 1] != path) {
    t.push(path)
    t = t.slice(-100)
  }
  return store('track', t)
}

window.back = function () {
  var t = store('track') || []
  var path = t[t.length - 1]
  if (path) {
    return (location = path)
  }
  history.go(-1)
}

window.goBack = function () {
  history.go(-(store('root') || 1))
}

window.navCount = function (add) {
  if (!add) {
    store('root', null)
    store('last', null)
    return
  }
  var path = location.pathname
  var last = store('last')
  if (!last || last != path) {
    store('root', (store('root') || 0) + 1)
  }
  store('last', path)
}

window.isImage = function (name) {
  return /\.(gif|jpe?g|tiff|png|bmp|svg)$/i.test(name)
}

window.closeWindow = function (e) {
  if (e.code == 'Escape') {
    goBack()
  }
}

window.truncate = function (str = '', size = 32) {
  return str.length > size ? str.substring(0, size).trim() + ' ...' : str
}

window.toggleVisibility = function (options = {}, fn) {
  var pub = options.pub || 'public'
  var priv = options.priv || 'private'
  var selector = '.' + pub + ',.' + priv
  var session = cookie(options.cookie || 'session')
  var toggle =
    fn ||
    function (el) {
      var isPublic = el.classList.contains(pub)
      var isPrivate = el.classList.contains(priv)
      if ((session && isPublic) || (!session && isPrivate)) {
        el.style.display = 'none'
      }
    }
  document.querySelectorAll(selector).forEach(toggle)
}

window.setActiveLink = function (options = {}) {
  document.querySelectorAll(options.selector || 'a').forEach(function (el) {
    if (el.pathname == location.pathname) {
      el.classList.add(options.active || 'active')
    }
  })
}

window.handleLogout = function (options = {}, fn) {
  var name = options.cookie || 'session'
  if (cookie(name)) cookie(name, null)
  if (fn) fn()
}

window.handleToggleMenu = function () {
  q('#main-menu', (el) => el.classList.toggle('open'))
}

window.handleCloseMenus = function (event) {
  event.stopPropagation()
  var el = event.target,
    toggle
  while (el) {
    if (el.classList.contains('open')) return
    var menu = el.getAttribute('data-toggle')
    if (menu) {
      toggle = q(menu)
      break
    }
    el = el.parentElement
  }
  qa('.open', (item) => {
    if (item != toggle) {
      item.classList.remove('open')
    }
  })
}
