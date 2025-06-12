# TextInput

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

A TextInput is a form element that lets users input and edit a single-line text value.

## Overview

### When to use TextInput

Use the TextInput component in forms when the user’s answer to a prompt can not easily be predicted, or when there is significant variability in potential inputs. 

### About TextInput

*Define the component's anatomy by listing all elements or subcomponents that make it up. Provide a definition for each component’s element and include as many Do’s and Don’ts as needed to outline best practices for using the component effectively.*

#### Start Icon (optional)  
A start icon can be included to visually enhance the input's purpose. For example, the "user avatar" icon might be used in a username field.

* **Do:** Use a simple icon that is easily understandable to users.

#### Input (optional)  
The following input types can be used:

1. Text (default)  
2. Search  
3. Number  
4. Email  
5. Password  
6. Telephone  
7. URL  
8. Week  
9. Month  
10. Date  
11. Date and time  
12. Time

#### Placeholder text (optional)  
Placeholder text provides an example of what type of information is being requested in the input.

* **Do:** Placeholder text should further illustrate and support the TextInput's label.  
* **Don't:** Placeholder text should never replace the label nor be the input's only description.

#### End icon (optional)  
A secondary end icon be included if needed.

#### Clear button (optional)  
A 'clear' button can be included to remove the typed content within the input field.

## Examples

### Basic usage

### With initial value

### Input type

Any of the [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) can be used. Some types may result in a browser-provided user interface, like a date picker for a date input.later.

### Clearable

A clearable TextInput will have a clear button when there is text in the input. When clicked, the clear button will set the input value to an empty string.

### With icons

Any of the [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) can be used. Some types may result in a browser-provided user interface, like a date picker for a date input.later.

* **Do:** Explain what users should do to use this element effectively.  
* **Don't:** Highlight what users should avoid when using this element.

### Form field

A TextInput can be wrapped in the Field component to add features like a semantic label, description and help text, validation messages, and more. Refer to the [Field](field.md) page for more information.

### Native validation
The TextInput component exposes native constraint validation methods. Refer to the methods below to review all of the supported features.
This demo sets the input type to "email" and validates the input on blur. When the input is invalid, it sets the Field's status to "error" and passes the native validation message to the Field component for display.

## Technical implementation

## Keyboard navigation

| Key | Function |
| :---- | :---- |
| <kbd>Left <kbd>arrow</kbd> / Right arrow</kbd> | The left and right arrows navigate through the text content within the input. |
| <kbd>Up arrow</kbd> / <kbd>Down arrow</kbd> | Up arrow moves the focus from the last position of the input to the first one, while down arrow moves it from the first position to the last. |