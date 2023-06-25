it('should create a form', async function ({ t, skjema, models }) {
  let result = skjema.form(models.article)
  t.ok(result.trim().startsWith('<form'))
})
