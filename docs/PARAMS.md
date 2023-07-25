There is a need to pass params to the queries that communicate with the API.

Usually it is an 'id', but is can also be 'email' or 'account_id'. There must be a way to pick those up automatically from the handleSave function.

At the moment we do this to pick up the 'id':

```js
// After the form
window.id = params('id')


// In the function
if (window.id) {
  params.query = { id }
}
```

This also doesn't work for multiple forms.

We can add the query data to the `data-params` attribute:

<form data-params="id account_id">

How to support URL params (/posts/123/show)?

<form data-query="id account_id project_id:2"> is a little bit too cryptic?

This can at least be the default way, it's very compact.

How to pass non-param data?

Alternative is to supply a data structure:

<script>
  window.query = {
    id: window.params('id'),
    account_id: window.params('account_id'),
    post_id: window.params(2)
  }
</script>

and then setup through:

<form data-query="query"> but it's too verbose?

and then access through:

```js
var query = window[form.getAttribute('data-query')] || {}
```

Less verbose:

<script>
  window.query = [
    'id',
    'account_id',
    'post_id:2',
    { extra: $.params.extra }
  }
</script>


### Discussion

We can have window.query be default so if form.getAttribute('data-query') doesn't exist we use that:

```
var query = window[form.getAttribute('data-query') || 'query'] || {}
```

The short hand version can be implemented later? Or as a separate thing? Called `data-params`?

<form data-params="id account_id">

If we want to keep it as data-query, then we could do this:

<form data-query="window.query">

<form data-query="id account_id">

i.e. if it starts with 'window', then we look it up there.

### Conclusion

Implement window.query as default object for query, and also this:

<form data-query="window.query">

<form data-query="id account_id project_id:2">
