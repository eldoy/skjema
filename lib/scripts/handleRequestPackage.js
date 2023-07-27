module.exports = function handleRequestPackage(query, values) {
  var package = {}
  if (Object.keys(query).length) {
    package.query = query
  }
  if (Object.keys(values).length) {
    package.values = values
  }
  console.log(JSON.stringify(package))
  return package
}
