# Skjema

Generate forms and actions.

Made for the [Waveorb Web Application Development Framework](https://waveorb.com)

### Install

This library is built into Waveorb. It can be installed on its own like this:

```
npm i skjema
```

### Usage

Define your schemas in `app/schemas`. Schemas consist of `documents` and `objects`. Documents describe your forms and validations. These live in `app/schemas/documents` and `app/schemas/objects` respectively.

Objects are re-usable data structures that can be merged into your documents.


### Documents

Documents can be written using JSON, YAML or Javascript:

```yml
# YAML document definition example
# Found in app/schemas/documents/project.yml
name: project
fields:
  name:
    type: text
    required: true
```

This will be the basis of form fields and server side action validations of your data.

### Objects

Objects can are used by prepending `$` to the object name:

```yml
# YAML object definition example
# Found in app/schemas/objects/user.yml
name:
  type: string
email:
  type: email
```

In your documents you can use them like this:

```
name: project
fields: $user
```

That will give you a document model that looks like this:

```yml
name: project
fields:
  name:
    type: string
  email:
    type: email
```

### Properties

These properties exist in the app data structure after load:

- `app.schemas.documents`: The schema document definitions
- `app.schemas.object`: The object definitions
- `app.schemas.models`: Documents as they exist after merging with objects
- `app.form`: Points to the `skjema` library instance

### Default pages

`Skjema` includes default pages you can use to generate the form:

- `new`: Create a new document
- `edit`: Update a document
- `delete`: Delete a document
- `list`: List all documents
- `show`: Show document details

Use them like this, using an example document model called 'project':

```js
// New project
module.exports = async function ($) {
  return $.app.form.pages.new($, 'project')
}

// Edit project
module.exports = async function ($) {
  var { id } = $.req.query.id
  var project = db('project').get({ id })
  return $.app.form.pages.edit($, 'project', project)
}

// Delete project
module.exports = async function ($) {
  var { id } = $.req.query.id
  var project = db('project').get({ id })
  return $.app.form.pages.delete($, 'project', project)
}

// Show project
module.exports = async function ($) {
  var { id } = $.req.query.id
  var project = db('project').get({ id })
  return $.app.form.pages.show($, 'project', project)
}

// List projects
module.exports = async function ($) {
  var projects = db('project').find()
  return $.app.form.pages.list($, 'project', projects)
}
```

### Default actions

The pages have corresponding built in actions, which will validate the data based on the document models:

- `count`: Counts the number of documents
- `create`: Create a new document
- `delete`: Delete a document
- `find`: Find documents
- `get`: Get a document
- `search`: Search for a document
- `update`: Update a document
- `upload`: Upload a file

In your schemas you can define `filters`, `setups`, `flows` and `validators` to be run for each document model:

```yml
name: project
filters:
  - authenticate, require_admin
setups:
  - setup_user
flows:
  - throttle_request
validators:
  - validate_user
fields:
  name:
    type: string
```

Any of these actions that you override will take presedence, so if you define an action in `app/actions/project/create.js`, it will replace the default create action.

### Custom page with form builder

The default pages are great for prototyping or very simple apps, but there might be times when you need to create your own pages. You can build your forms manually using the `app.form.build` function:

```js
// Custom page with new form
module.exports = async function($) {
  return `<h1>New Project</h1>
    ${await $.app.form.build($, 'project')}`
  `
}
```

```js
// Custom page with edit form
module.exports = async function($) {
  var { id } = $.req.query.id
  var project = db('project').get({ id })

  return `<h1>Edit Project</h1>
    ${await $.app.form.build($, 'project', project)}`
  `
}
```

### Custom form with the fields function

If you need to create the form element manually, you can just use the `fields` function to achieve the same thing:

```js
module.exports = async function($) {
  return `<h1>New Project</h1>
    <form onsubmit="return false">
      ${await $.app.form.fields($, 'project')}
    </form>`
}
```

```js
module.exports = async function($) {
  var { id } = $.req.query.id
  var project = db('project').get({ id })

  return `<h1>Edit Project</h1>
    <form onsubmit="return false">
      ${await $.app.form.fields($, 'project', project)}
    </fields>`
  `
}
```

### Build your own form

Following the principle of "progressive enhancement", and for even more control, you can build your form completely from scratch using field functions:

```js
module.exports = async function($) {
  var model = $.app.schema.models.project
  return `<h1>New Project</h1>
    <form onsubmit="return false">
      ${$.app.form.checkbox($, model.fields.checkbox)}
    </form>`
}
```

These functions lets you override the schema files, or even let you create form fields without a schema:

```js
module.exports = async function($) {
  return `<h1>New Project</h1>
    <form onsubmit="return false">
      ${$.app.form.text($, { name: 'email' }}
    </form>`
}
```

To set a value, just pass the value:

```js
module.exports = async function($) {
  return `<h1>New Project</h1>
    <form onsubmit="return false">
      ${$.app.form.email($, { name: 'email', value: 'test@example.com' }}
    </form>`
}
```

The field elements functions that exist are:

- `bool`: Create a toggler for true or false values
- `checkbox`: Creates checkboxes
- `color`: Color input
- `date`: Date chooser
- `email`: Input with type "email"
- `file`: File upload field
- `hidden`: Hidden input
- `number`: Number input
- `password`: Password input
- `radio`: Radio buttons
- `select`: Select fields
- `text`: Text input, the default
- `textarea`: Create a text area


MIT Licensed. Enjoy!
