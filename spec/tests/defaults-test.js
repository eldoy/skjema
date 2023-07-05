it('should find defaults for fields', async function ({ t, skjema, models }) {
  let result = skjema.tags.defaults(models.all.fields.text)
  t.equal(result, '')

  result = skjema.tags.defaults(models.all.fields.email)
  t.equal(result, '')

  result = skjema.tags.defaults(models.all.fields.password)
  t.equal(result, '')

  result = skjema.tags.defaults(models.all.fields.number)
  t.equal(result, '0')

  result = skjema.tags.defaults(models.all.fields.bool)
  t.equal(result, 'false')

  result = skjema.tags.defaults(models.all.fields.textarea)
  t.equal(result, '')

  result = skjema.tags.defaults(models.all.fields.file)
  t.equal(result, '')

  result = skjema.tags.defaults(models.all.fields.date)
  t.equal(result, '')

  result = skjema.tags.defaults(models.all.fields.color)
  t.equal(result, '#000000')

  result = skjema.tags.defaults(models.all.fields.checkbox)
  t.equal(result, '[]')

  result = skjema.tags.defaults(models.all.fields.radio)
  t.equal(result, '')

  result = skjema.tags.defaults(models.all.fields.select)
  t.equal(result, '')
})
