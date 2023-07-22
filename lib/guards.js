var names = ['filters', 'setups', 'flows', 'validators']
module.exports = async function guards($, model) {
  for (var name of names) {
    if (Array.isArray(model[name])) {
      var guard = name == 'validators' ? 'validate' : name
      if (typeof $[guard] == 'function') {
        await $[guard](model[name])
      }
    }
  }
}
