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

To disable automatic generation of actions, you can add this to your document definition:

```yml
actions: []
```

or this if you want to only generate certain actions:

```yml
actions:
  - find
  - get
  - list
```

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
    <form action="/project/create" onsubmit="return false">
      ${await $.app.form.fields($, 'project')}
    </form>`
}
```

```js
module.exports = async function($) {
  var { id } = $.req.query.id
  var project = db('project').get({ id })

  return `<h1>Edit Project</h1>
    <form action="/project/update" onsubmit="return false">
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
    <form action="/project/create" onsubmit="return false">
      ${$.app.form.checkbox($, model.fields.checkbox)}
    </form>`
}
```

These functions lets you override the schema files, or even let you create form fields without a schema:

```js
module.exports = async function($) {
  return `<h1>New Project</h1>
    <form action="/project/create" onsubmit="return false">
      ${$.app.form.text($, { name: 'email' }}
    </form>`
}
```

To set a value, just pass the value:

```js
module.exports = async function($) {
  return `<h1>New Project</h1>
    <form action="/project/create" onsubmit="return false">
      ${$.app.form.email($, { name: 'email', value: 'test@example.com' }}
    </form>`
}
```

These are the available field element functions:

```js
// Create checkbox
app.form.checkbox($, {
  name: 'food',
  options: [ 'juice', 'meat', 'milk' ]
})

// Create file upload field
app.form.file($, {
  name: 'image',
  action: '/upload/create',
  size: 100
})

// Create radio buttons
app.form.radio($, {
  name: 'nature',
  options: [ 'sun', 'moon', 'sea' ]
})

// Select box
app.form.select($, {
  name: 'country',
  options: [ 'spain', 'norway', 'germany' ]
})

// Text input field
app.form.text($, {
  name: 'status'
})

// Number input field
app.form.number($, {
  name: 'age'
})

// Radio button toggle
app.form.bool($, {
  name: 'accept'
})

// Hidden field
app.form.hidden($, {
  name: 'id'
})

// Textarea
app.form.textarea($, {
  name: 'description'
})

// Password field
app.form.password($, {
  name: 'pass'
})

// Email field
app.form.email($, {
  name: 'email'
})

// Date field
app.form.date($, {
  name: 'birthdate'
})

// Color field
app.form.color($, {
  name: 'color'
})

// Submit button
app.form.submit($)
```

They are used like this on a page:

```js
// Create new document
module.exports = async function($) {
  return `<h1>User form</h1>
    <form action="/user/create" onsubmit="return false">
      ${$.app.form.text($, { name: 'name' })}
      ${$.app.form.email($, { name: 'email' })}
      ${$.app.form.submit($)}
    </form>
  `
}

// Update document, using value
module.exports = async function($) {
  var { id } = $.req.query.id
  var user = db('user').get({ id })

  return `<h1>User form</h1>
    <form action="/user/update" onsubmit="return false">
      ${$.app.form.text($, { name: 'name', value: user.name })}
      ${$.app.form.email($, { name: 'email', value: user.email })}
      ${$.app.form.submit($)}
    </form>
  `
}
```

### License

MIT Licensed. Enjoy!
