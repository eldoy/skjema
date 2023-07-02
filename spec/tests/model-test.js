it('should support load documents with objects', async function ({
  t,
  skjema,
  data
}) {
  let models = skjema.model(data.schema)
  t.equal(data.schema.documents.task.user, '$user')
  t.equal(data.schema.models.task.user.name.type, 'string')
  t.equal(models.task.user.name.type, 'string')
  t.equal(models.article.fields.author.name, 'author')
})
