it('should build a form', async function ({ t, skjema, models, $ }) {
  let result = await skjema.build($, models.article)
  t.ok(result.trim().startsWith('<form'))
})
