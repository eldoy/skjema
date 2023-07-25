module.exports = async function ($) {
  return /* HTML */ `<h1>Welcome</h1>
    <p><a href="/item/list">Item list</a></p>
    <form onsubmit="return false">
      <input
        type="text"
        placeholder="Write something"
        onchange="(function(input){
          console.log(input.form)
          console.log('hello')
      }(this))"
      />
    </form> `
}
