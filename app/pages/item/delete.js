module.exports = async function ($) {
  await $.setups(['getItem'])

  return /* HTML */ `<h1>Delete item</h1>
    <p>Really delete item?</p>
    <form
      action="/item/delete"
      onsubmit="return false"
      data-query="id"
      data-message="Item deleted"
    >
      <button onclick="window.handleSave(this)">Delete</button>
    </form>
    <script>
      window.handleSave = ${$.app.scripts.handleSave}
    </script> `
}
