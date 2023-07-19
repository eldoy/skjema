module.exports = async function ($) {
  await $.setups(['getItem'])

  return /* HTML */ `<h1>Delete item</h1>
    <p>Really delete item?</p>
    <form action="/item/delete" onsubmit="return false">
      <input type="hidden" name="id" value="${$.data.item.id}" />
      <button onclick="window.handleDelete(this)">Delete</button>
    </form>
    <script>
      window.handleDelete = ${$.app.scripts.handleDelete}
    </script> `
}
