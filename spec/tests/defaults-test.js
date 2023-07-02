it('should find defaults for fields', async function ({ t, skjema, models }) {
  let result = skjema.defaults(models.all.fields.string)
  t.equal(result, '')

  result = skjema.defaults(models.all.fields.email)
  t.equal(result, '')

  result = skjema.defaults(models.all.fields.password)
  t.equal(result, '')

  result = skjema.defaults(models.all.fields.number)
  t.equal(result, '0')

  result = skjema.defaults(models.all.fields.bool)
  t.equal(result, 'false')

  result = skjema.defaults(models.all.fields.text)
  t.equal(result, '')

  result = skjema.defaults(models.all.fields.file)
  t.equal(result, '')

  result = skjema.defaults(models.all.fields.date)
  t.equal(result, '')

  result = skjema.defaults(models.all.fields.color)
  t.equal(result, '')

  result = skjema.defaults(models.all.fields.checkbox)
  t.equal(result, '[]')

  result = skjema.defaults(models.all.fields.radio)
  t.equal(result, '')

  result = skjema.defaults(models.all.fields.select)
  t.equal(result, '')
})