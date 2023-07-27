module.exports = async function ($) {
  return /* HTML */ `<h1>Welcome</h1>
    <p><a href="/item/list">Item list</a></p>

    <script>
      class Form {
        constructor(hello) {
          console.log('constructor')
          this.hello = hello
        }

        say() {
          console.log(this.hello)
        }
      }

      var f = new Form('fuck')
      f.say()
    </script> `
}
