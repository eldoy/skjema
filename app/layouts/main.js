module.exports = async function ($) {
  return /* HTML */ `
    <!DOCTYPE html>
    <html lang="${$.lang}">
      <head>
        <meta http-equiv="content-type" content="text/html;charset=utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Skjema demo app" />
        <title>${$.page.title || '♥'} - Skjema demo app</title>
        <link rel="icon" type="image/png" href="/img/favicon.png" />
        ${$.script('/bundle.js')} ${$.style('/bundle.css')}
        <script>
          window.api = waveorb('${$.app.config.env.api}')
        </script>
        ${process.env.NODE_ENV == 'development' ? $.script('/js/dev.js') : ''}
      </head>
      <body>
        <header>
          <nav>
            <a href="${$.link('index')}">Home</a>
            <a href="${$.link('about')}">About</a>
          </nav>
        </header>
        <script>
          setActiveLink()
        </script>
        <div class="notify"><div class="flash" id="flash"></div></div>
        <main>${$.page.content}</main>
        <footer>
          Made by <a href="https://eldoy.com">Eldøy Projects</a>, Oslo, Norway
        </footer>
        <script>
          flash()
          window.handleSave = ${$.app.scripts.handleSave}
          window.handleUpload = ${$.app.scripts.handleUpload}
          window.handleUploadReset = ${$.app.scripts.handleUploadReset}
          window.handleUploadProgress = ${$.app.scripts.handleUploadProgress}
          window.renderUploadImage = ${$.app.scripts.renderUploadImage}
        </script>
      </body>
    </html>
  `
}
