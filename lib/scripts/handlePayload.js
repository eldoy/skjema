module.exports = function handlePayload(query, values) {
  var payload = {}
  if (Object.keys(query).length) {
    payload.query = query
  }
  if (Object.keys(values).length) {
    payload.values = values
  }
  return payload
}
