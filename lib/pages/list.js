var { esc } = require('haka')

module.exports = async function ($, name, list = []) {
  if (typeof list == 'string') {
    list = $.data[list] || []
  }
  return /* HTML */ `<h1>${$.t(`${name}.name`)} ${$.t('list')}</h1>
    <p><a href="/${name}/new">${$.t('new')} ${esc(name)}</a></p>
    ${(function () {
      if (list.length) {
        return /* HTML */ `<ul>
          ${list
            .map(function (item) {
              return /* HTML */ `
                <li>
                  <a href="/${name}/edit?id=${item.id}">${$.t('edit')}</a>
                  <a href="/${name}/delete?id=${item.id}">${$.t('delete')}</a>
                  <a href="/${name}/show?id=${item.id}">
                    ${esc(item.label || item.name || item.title || item.id)}
                  </a>
                </li>
              `
            })
            .join('\n')}
        </ul>`
      }
      return /* HTML */ `<p>${$.t(`${name}.list_empty`)}</p>`
    })()} `
}
