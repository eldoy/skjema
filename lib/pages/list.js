module.exports = async function ($) {
  return /* HTML */ `<h1>Item list</h1>
    <p><a href="/item/new">New item</a></p>
    ${(function () {
      if ($.data.items.length) {
        return /* HTML */ `<ul>
          ${$.data.items
            .map(function (item) {
              return /* HTML */ `
                <li>
                  <a href="/item/edit?id=${item.id}">Edit</a>
                  <a href="/item/delete?id=${item.id}">Delete</a>
                  ${esc(item.id)}-${esc(item.text)}
                </li>
              `
            })
            .join('\n')}
        </ul>`
      }
      return /* HTML */ `<p>No items found</p>`
    })()} `
}
