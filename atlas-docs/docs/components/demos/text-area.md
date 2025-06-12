# TextArea

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

A TextArea is a multi-line text input that allows manual resizing if needed.

## Overview

### When to use TextArea

Use the TextArea component to let users enter long text that exceeds one line.

This form element is useful when the user needs to enter a sizable amount of free-form text, for example comments, reviews, feedback, or short essay responses. If the text is expected to be short, use TextInput instead.

### About TextArea

TextArea includes the following elements.

#### Start icon (optional)  
Describe the component's element and include Do’s and Don’ts as needed.

* **Do:** Use a simple icon that is easily understandable to users.

#### TextArea 
The textarea element's has an optional grabber that allows vertical resizing, and a scrollbar will appear if the text exceeds the height of the textarea before resizing. If the autosize property is enabled, the height of the textarea adjusts automatically according to the length of the text.

#### Start icon (optional)  
The textarea element's has an optional grabber that allows vertical resizing, and a scrollbar will appear if the text exceeds the height of the textarea before resizing. If the autosize property is enabled, the height of the textarea adjusts automatically according to the length of the text.

* **Do:** Use a simple icon that is easily understandable to users.

#### Placeholder text (optional)  
Placeholder text provides an example of what type of information is being requested in the TextArea.

* **Do:** Placeholder text should further illustrate and support the TextArea's label.  
* **Don't:** Placeholder text should never replace the label nor be the input's only description.

#### End icon (optional)  
A secondary end icon can be included if needed.

## Examples

### Basic usage

By default, the TextArea has a grabber that can be used to manually resize it.

### Custom rows 

*Provide a description of this example and include an image illustrating how the component demo should look. This will help developers accurately implement it later.*

* **Do:** The number of rows shown should reflect the amount of text expected to be entered.

### With autosize

When the autosize property is enabled, the TextArea's height will automatically grow with the length of the text. The grabber and scrollbar are removed since the TextArea expands automatically and shows all of the text at once.

* **Do:** Use a TextArea with \`autosize\` when there is ample space in the layout for the TextArea to expand.

### With icons

A TextArea can have a start icon, end icon, or both. Any Codex icon can be used.

* **Do:** Use simple icons that are easily understandable to users.

### Form field

A TextArea can be wrapped in the Field component to add features like a semantic label, description and help text, and validation messages. A character counter can also be added via the Field component. Refer to the [Field](field.md) page for more information.


### Native validation

The TextArea component exposes [native constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) methods. Refer to the methods below to review all of the supported features.

This demo sets the `required` attribute on the textarea and validates it when the form is submitted. When the textarea is invalid, it sets the Field's status to "error" and passes the native validation message to the Field component for display. Submit the form while leaving the TextArea blank.


## Technical implementation

## Keyboard navigation

| Key | Function |
| :---- | :---- |
| <kbd>Left <kbd>arrow</kbd> / Right arrow</kbd> | The left and right arrows navigate through the text content within the input. |
| <kbd>Up arrow</kbd> / <kbd>Down arrow</kbd> | Up arrow moves the focus from the last position of the input to the first one, while down arrow moves it from the first position to the last. |