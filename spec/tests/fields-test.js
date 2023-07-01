it('should have a checkbox field', async function ({ t, skjema, models }) {
  var result = skjema.checkbox({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a file field', async function ({ t, skjema, models }) {
  var result = skjema.file({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a radio field', async function ({ t, skjema, models }) {
  var result = skjema.radio({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a select field', async function ({ t, skjema, models }) {
  var result = skjema.select({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a string field', async function ({ t, skjema, models }) {
  var result = skjema.string({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a text field', async function ({ t, skjema, models }) {
  var result = skjema.text({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a password field', async function ({ t, skjema, models }) {
  var result = skjema.password({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a email field', async function ({ t, skjema, models }) {
  var result = skjema.email({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a date field', async function ({ t, skjema, models }) {
  var result = skjema.date({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a color field', async function ({ t, skjema, models }) {
  var result = skjema.color({}, models.article)
  t.ok(typeof result == 'string')
})
