it('should find types for fields', async function ({ t, skjema, models }) {
  let result = skjema.types(models.all.fields.string)
  t.equal(result, '')

  result = skjema.types(models.all.fields.email)
  t.equal(result, '')

  result = skjema.types(models.all.fields.password)
  t.equal(result, '')

  result = skjema.types(models.all.fields.number)
  t.equal(result, 'number')

  result = skjema.types(models.all.fields.bool)
  t.equal(result, 'bool')

  result = skjema.types(models.all.fields.textarea)
  t.equal(result, '')

  result = skjema.types(models.all.fields.file)
  t.equal(result, '')

  result = skjema.types(models.all.fields.date)
  t.equal(result, 'date')

  result = skjema.types(models.all.fields.color)
  t.equal(result, '')

  result = skjema.types(models.all.fields.checkbox)
  t.equal(result, 'array')

  result = skjema.types(models.all.fields.radio)
  t.equal(result, '')

  result = skjema.types(models.all.fields.select)
  t.equal(result, '')
})
