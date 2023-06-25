# Generate and interprete forms and actions.

### TODO

users:
  type: array
  max: 5
  fields: $user

user object
image:
  type: image
  config:
    sizes:
      thumb: 50x50
      medium: 100x100
      large: 200x200
      original:
name:
  type: string
email:
  type: email

car:
  type: object
  fields:
    make:
      type: string
    color:
      type: select
      values: [red, white, silver]

Variation of file?
avatar:
  type: image

Other input types
type: date
type: color
type: email
type: number
others?

Support value: name for options
for select, radio and checkbox
location:
  type: select
  options:
    - value: name
    - value: name

legend for radio and checkbox
