---
sidebarDepth: -1
---

# Validateme

It's the main class. Offers the interface between fields and plugins/client code.

## Named exports

### `setErrorHandler(handler: (error: any) => Array<RawRules>): void`

Configures the error handler for parsing the errors thrown by the server.

## Methods

### `setField(field: ValidatemeField): void`

Adds a new field. It throws an error if the field name already exists in the fields collection.

### `process(error: any): void`

Processes the server error and injects the new errors and warnings to every failed field.

### `validate(): [boolean, Object?]`

It validates every field and returns `[false]` if fails, or `[true, Object]` if success, where the `Object` represents each field and its value.
