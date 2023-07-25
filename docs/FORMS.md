At the moment we have ids that are the same as the name:

<input id="name">

This doesn't work if you more than one form, or if something else is named that way.

<input id="name-field"> is better, but still risks crashing with other ids.

Using an actual id is better in terms of crashing, but is more verbose:

<input id="user-form-name-field">

Using classes avoids invalid HTML:

<input class="name-field">

and then fields can be accessed through the form id:

<form id="user-form">
q('#user-form .name-field')

It's maybe possible to skip id on form and use the narrow-with q('.name-field', form) syntax if we already have the form element (1)

It's also possible to access fields through non-id and non-class attributes, but it's hard to find something stable.

Ids can be generated, but then it's difficult to access them through inspector or directly since you have to check the id first.

It's also the issue that we want to work with existing code. If we change the showErrors and clearErrors functions then we break existing apps.

### Conclusion

The easiest is to avoid form id and use the narrow-with syntax (1). Using classes instead of ids would solve the duplicate id HTML validation errors.

WARNING: This will break existing apps unless we build in support for classes instead of ids in the following functions:

- clearErrors
- showErrors

Should we create a new form library that includes:

- skjema form elements
- clearErrors
- showErrors

The last two can then be merged in to an new object with two functions:

form.errors.clear()
form.errors.show()

Perhaps we can add it to the form prototype:

qa('form', function(el) {
  form.errors = {}
  form.errors.show = function() {}
  form.errors.clear = function() {}

  // Can even add init stuff so we don't have to write it
  form.onsubmit = 'return false'
})

Can also use `document.forms`:

document.forms.forEach(function(el) {
  ...
})

Use from elements:
<input onchange="this.form.errors.clear()">

Use from functions:
form.errors.show({ scroll: false })
form.errors.clear()
