- [√] Need data-size on file input to pass to renderUpoadImage
- [√] Implement scroll prop for form
- [x] Optional await for form.build

- [√] Support data-onerror and data-onsuccess
- [√] Use data-message for custom message on success
- [√] Use data-redirect for custom redirect on success
- [√] Possible to merge handleDelete and handleSave?

- [√] Implement window.query as default object for query, and also this:
  <form data-query="window.query">
  <form data-query="id account_id project_id:2">

- [√] Implement clearErrors based on class
- [√] Implement showErrors based on class
- [√] Force form for showErrors

- [x] Postfix all ids with -field, use id="{id}" and same for errors

- [√] How to pass model name to flash?
- [√] Support for filters in actions (and flows?) for setup of data

- [x] Support for belongs to
  - through query url
  - through params url
  - mix
  - multiple
  - eternally deep
  - you are responsible for setting up variables
  - actions should validate query params

- [-] References to other collections
  - [√] select
  - [√] radio
  - [ ] checkboxes

- [ ] Support multiple select
  - multiple: true or type select-multiple (like haka)
  - validations: is: 'array'
  - does d8a support: in for arrays (all values must be in) ?

- [√] Desc <small> to all labels and legends
- [√] textarea, select, radio, checkbox clearerrors
- [√] don't use id for upload preview
- [√] reset to upload file twice
- [√] Upload action should be /item/upload, not /upload/create
- [√] Add class 'form' for forms?
- [√] Add default handleUploadReset after making it work
  - also reset progress?
