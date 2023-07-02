it('should make validations for create', async function ({
  t,
  skjema,
  models
}) {
  let validations = skjema.validations(models.all, 'create')

  t.equal(validations.string.required, true)
  t.equal(validations.string.is, 'string')

  t.equal(validations.email.required, true)
  t.equal(validations.email.is, 'email')

  t.equal(validations.password.required, true)
  t.equal(validations.password.is, 'string')

  t.equal(validations.number.required, true)
  t.equal(validations.number.is, 'number')

  t.equal(validations.bool.required, true)
  t.equal(validations.bool.is, 'boolean')

  t.equal(validations.text.required, true)
  t.equal(validations.text.is, 'string')

  t.equal(validations.file.required, true)
  t.equal(validations.file.is, 'url')

  t.equal(validations.date.required, true)
  t.equal(validations.date.is, 'date')

  t.equal(validations.color.required, true)
  t.equal(validations.color.is, 'color')

  t.equal(validations.checkbox.required, true)
  t.equal(validations.checkbox.is, 'array')
  t.deepEqual(validations.checkbox.in, ['juice', 'meat', 'milk'])

  t.equal(validations.radio.required, true)
  t.equal(validations.radio.is, 'string')
  t.deepEqual(validations.radio.in, ['sun', 'moon', 'sea'])

  t.equal(validations.select.required, true)
  t.equal(validations.select.is, 'string')
  t.deepEqual(validations.select.in, ['spain', 'norway', 'germany'])
})

it('should make validations for create', async function ({
  t,
  skjema,
  models
}) {
  let validations = skjema.validations(models.all, 'update')

  t.equal(validations.string.required, undefined)
  t.equal(validations.string.is, 'string')

  t.equal(validations.email.required, undefined)
  t.equal(validations.email.is, 'email')

  t.equal(validations.password.required, undefined)
  t.equal(validations.password.is, 'string')

  t.equal(validations.number.required, undefined)
  t.equal(validations.number.is, 'number')

  t.equal(validations.bool.required, undefined)
  t.equal(validations.bool.is, 'boolean')

  t.equal(validations.text.required, undefined)
  t.equal(validations.text.is, 'string')

  t.equal(validations.file.required, undefined)
  t.equal(validations.file.is, 'url')

  t.equal(validations.date.required, undefined)
  t.equal(validations.date.is, 'date')

  t.equal(validations.color.required, undefined)
  t.equal(validations.color.is, 'color')

  t.equal(validations.checkbox.required, undefined)
  t.equal(validations.checkbox.is, 'array')
  t.deepEqual(validations.checkbox.in, ['juice', 'meat', 'milk'])

  t.equal(validations.radio.required, undefined)
  t.equal(validations.radio.is, 'string')
  t.deepEqual(validations.radio.in, ['sun', 'moon', 'sea'])

  t.equal(validations.select.required, undefined)
  t.equal(validations.select.is, 'string')
  t.deepEqual(validations.select.in, ['spain', 'norway', 'germany'])
})
