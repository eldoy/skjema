it('should have a checkbox field', async function ({ t, skjema, models }) {
  var result = skjema.fields.checkbox({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a file field', async function ({ t, skjema, models }) {
  var result = skjema.fields.file({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a radio field', async function ({ t, skjema, models }) {
  var result = skjema.fields.radio({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a select field', async function ({ t, skjema, models }) {
  var result = skjema.fields.select({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a string field', async function ({ t, skjema, models }) {
  var result = skjema.fields.string({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a text field', async function ({ t, skjema, models }) {
  var result = skjema.fields.text({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a password field', async function ({ t, skjema, models }) {
  var result = skjema.fields.password({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a email field', async function ({ t, skjema, models }) {
  var result = skjema.fields.email({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a date field', async function ({ t, skjema, models }) {
  var result = skjema.fields.date({}, models.article)
  t.ok(typeof result == 'string')
})

it('should have a color field', async function ({ t, skjema, models }) {
  var result = skjema.fields.color({}, models.article)
  t.ok(typeof result == 'string')
})
