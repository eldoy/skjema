var { esc } = require('haka')

module.exports = async function ($, name, list) {
  return /* HTML */ `<h1>${$.t(`${name}.name`)} list</h1>
    <p><a href="/${name}/new">${$.t('new')} ${esc(name)}</a></p>
    ${(function () {
      if ($.data[list].length) {
        return /* HTML */ `<ul>
          ${$.data[list]
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
      return /* HTML */ `<p>${$.t('item.list_empty')}</p>`
    })()} `
}
