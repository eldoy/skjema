it('should have a create action', async function ({ t, skjema, models }) {
  var result = skjema.actions.create(models.article)
  t.ok(typeof result == 'function')
})

it('should have an update action', async function ({ t, skjema, models }) {
  var result = skjema.actions.update(models.article)
  t.ok(typeof result == 'function')
})

it('should have a get action', async function ({ t, skjema, models }) {
  var result = skjema.actions.get(models.article)
  t.ok(typeof result == 'function')
})

it('should have a find action', async function ({ t, skjema, models }) {
  var result = skjema.actions.find(models.article)
  t.ok(typeof result == 'function')
})

it('should have a count action', async function ({ t, skjema, models }) {
  var result = skjema.actions.count(models.article)
  t.ok(typeof result == 'function')
})

it('should have a search action', async function ({ t, skjema, models }) {
  var result = skjema.actions.search(models.article)
  t.ok(typeof result == 'function')
})

it('should have a delete action', async function ({ t, skjema, models }) {
  var result = skjema.actions.delete(models.article)
  t.ok(typeof result == 'function')
})
