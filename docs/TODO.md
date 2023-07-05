- [ ] Postfix all ids with -field, use id="{id}" and same for errors
  - Generate random id to pass through?
    - this supports multiple forms with same ids (field names)

- [ ] How to pass model name to flash?
  - want "Item deleted." instead of just "Deleted"
  - model to field on load?
  - use tag?
  - global translations?
  - support for locales in schema?
  - callback in all scripts?

- [ ] Support for filters in actions (and flows?) for setup of data

- [ ] Support for belongs to
  - through query url
  - through params url
  - mix
  - multiple
  - eternally deep
  - you are responsible for setting up variables
  - actions should validate query params

- [ ] References to other collections
  - select
  - radio
  - checkboxes

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
