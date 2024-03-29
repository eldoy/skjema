it('should find types for fields', async function ({ t, skjema, models }) {
  let result = skjema.tags.types(models.all.fields.text)
  t.equal(result, '')

  result = skjema.tags.types(models.all.fields.email)
  t.equal(result, '')

  result = skjema.tags.types(models.all.fields.password)
  t.equal(result, '')

  result = skjema.tags.types(models.all.fields.number)
  t.equal(result, 'number')

  result = skjema.tags.types(models.all.fields.bool)
  t.equal(result, 'bool')

  result = skjema.tags.types(models.all.fields.textarea)
  t.equal(result, '')

  result = skjema.tags.types(models.all.fields.file)
  t.equal(result, '')

  result = skjema.tags.types(models.all.fields.date)
  t.equal(result, 'date')

  result = skjema.tags.types(models.all.fields.color)
  t.equal(result, '')

  result = skjema.tags.types(models.all.fields.checkbox)
  t.equal(result, 'array')

  result = skjema.tags.types(models.all.fields.radio)
  t.equal(result, '')

  result = skjema.tags.types(models.all.fields.select)
  t.equal(result, '')
})
