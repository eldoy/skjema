it('should make validations for create', async function ({
  t,
  skjema,
  models
}) {
  let validations = skjema.validations(models.all, 'create')

  t.equal(validations.title.required, true)
  t.equal(validations.title.is, 'string')

  t.equal(validations.email.required, true)
  t.equal(validations.email.is, 'email')

  t.equal(validations.password.required, true)
  t.equal(validations.password.is, 'string')

  t.equal(validations.amount.required, true)
  t.equal(validations.amount.is, 'number')

  t.equal(validations.accept.required, true)
  t.equal(validations.accept.is, 'boolean')

  t.equal(validations.content.required, true)
  t.equal(validations.content.is, 'string')

  t.equal(validations.image.required, true)
  t.equal(validations.image.is, 'url')

  t.equal(validations.created.required, true)
  t.equal(validations.created.is, 'date')

  t.equal(validations.background.required, true)
  t.equal(validations.background.is, 'color')

  t.equal(validations.tags.required, true)
  t.equal(validations.tags.is, 'array')
  t.deepEqual(validations.tags.in, ['juice', 'meat', 'milk'])

  t.equal(validations.category.required, true)
  t.equal(validations.category.is, 'string')
  t.deepEqual(validations.category.in, ['sun', 'moon', 'sea'])

  t.equal(validations.location.required, true)
  t.equal(validations.location.is, 'string')
  t.deepEqual(validations.location.in, ['spain', 'norway', 'germany'])
})

it('should make validations for update', async function ({
  t,
  skjema,
  models
}) {
  let validations = skjema.validations(models.all, 'update')

  t.equal(validations.title.required, undefined)
  t.equal(validations.title.is, 'string')

  t.equal(validations.email.required, undefined)
  t.equal(validations.email.is, 'email')

  t.equal(validations.password.required, undefined)
  t.equal(validations.password.is, 'string')

  t.equal(validations.amount.required, undefined)
  t.equal(validations.amount.is, 'number')

  t.equal(validations.accept.required, undefined)
  t.equal(validations.accept.is, 'boolean')

  t.equal(validations.content.required, undefined)
  t.equal(validations.content.is, 'string')

  t.equal(validations.image.required, undefined)
  t.equal(validations.image.is, 'url')

  t.equal(validations.created.required, undefined)
  t.equal(validations.created.is, 'date')

  t.equal(validations.background.required, undefined)
  t.equal(validations.background.is, 'color')

  t.equal(validations.tags.required, undefined)
  t.equal(validations.tags.is, 'array')
  t.deepEqual(validations.tags.in, ['juice', 'meat', 'milk'])

  t.equal(validations.category.required, undefined)
  t.equal(validations.category.is, 'string')
  t.deepEqual(validations.category.in, ['sun', 'moon', 'sea'])

  t.equal(validations.location.required, undefined)
  t.equal(validations.location.is, 'string')
  t.deepEqual(validations.location.in, ['spain', 'norway', 'germany'])
})
