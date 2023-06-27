module.exports = function submit($) {
  return /* HTML */ `<p class="buttons">
    <a href="javascript:void(0)" onclick="window.back()">Cancel</a>
    <button onclick="handleSave(this)">Save</button>
  </p> `
}
