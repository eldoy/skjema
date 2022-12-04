const furu = require('furu')
const layout = require('./app/layouts/main.js')

// TODO: Generate routes from models
// const routes = {
//   'get#': homePage,
//   'get#about': aboutPage
// }

const routes = {}

async function handleRequest(req, res) {
  console.log(req.route)
  if (req.route) {
    const html = await req.route(req, res)
    return layout(html)
  }
}

const options = { port: 9095, assets: 'app/assets', routes }

furu(options, handleRequest)
