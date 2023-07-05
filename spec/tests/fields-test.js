it('should have a checkbox field', async function ({ t, skjema, models }) {
  var result = skjema.checkbox({}, models.all.fields.checkbox)
  t.ok(typeof result == 'string')
})

it('should have a file field', async function ({ t, skjema, models }) {
  var result = skjema.file({}, models.all.fields.file)
  t.ok(typeof result == 'string')
})

it('should have a radio field', async function ({ t, skjema, models }) {
  var result = skjema.radio({}, models.all.fields.radio)
  t.ok(typeof result == 'string')
})

it('should have a select field', async function ({ t, skjema, models }) {
  var result = skjema.select({}, models.all.fields.select)
  t.ok(typeof result == 'string')
})

it('should have a text field', async function ({ t, skjema, models }) {
  var result = skjema.text({}, models.all.fields.text)
  t.ok(typeof result == 'string')
})

it('should have a number field', async function ({ t, skjema, models }) {
  var result = skjema.number({}, models.all.fields.number)
  t.ok(typeof result == 'string')
})

it('should have a bool field', async function ({ t, skjema, models }) {
  var result = skjema.bool({}, models.all.fields.bool)
  t.ok(typeof result == 'string')
})

it('should have a hidden field', async function ({ t, skjema, models }) {
  var result = skjema.hidden({}, models.all.fields.hidden)
  t.ok(typeof result == 'string')
})

it('should have a textarea field', async function ({ t, skjema, models }) {
  var result = skjema.textarea({}, models.all.fields.textarea)
  t.ok(typeof result == 'string')
})

it('should have a password field', async function ({ t, skjema, models }) {
  var result = skjema.password({}, models.all.fields.password)
  t.ok(typeof result == 'string')
})

it('should have a email field', async function ({ t, skjema, models }) {
  var result = skjema.email({}, models.all.fields.email)
  t.ok(typeof result == 'string')
})

it('should have a date field', async function ({ t, skjema, models }) {
  var result = skjema.date({}, models.all.fields.date)
  t.ok(typeof result == 'string')
})

it('should have a color field', async function ({ t, skjema, models }) {
  var result = skjema.color({}, models.all.fields.color)
  t.ok(typeof result == 'string')
})
