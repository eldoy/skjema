it('should build a form', async function ({ t, skjema, models }) {
  let result = skjema.build({}, models.article)
  t.ok(result.trim().startsWith('<form'))
})
