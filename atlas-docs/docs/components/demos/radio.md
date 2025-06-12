# Radio

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

A Radio is a binary input that is usually combined in a group of two or more options. They signal a pattern where users can only select one of the available options. Radios are also known as “radio buttons”.

## Overview

### When to use Radio

Radio must feature a descriptive label. They must be part of a Radio group of at least two elements. A Radio may also have sub-components or child Radio groups.

Use the Radio component to make a single selection from a list of options where only one choice is allowed. When multiple selections are needed, use [Checkbox](checkbox.md)  instead.

### About Radio

Radio includes the following elements.

#### Radio  
Radio buttons make the selection visually distinct.

#### Label  
The Radio must always contain a label, with the text size matching the base font size for consistency with the body text. Labels can include links and bold text and should be concise, clearly indicating the selected option.

* **Do:** Keep the choices short and mutually exclusive. Concise, Clear & Trustworthy  
* **Do:** Use text formatting like bold and italic sparingly in the label.  
* **Do:** Include standalone links within the label to provide additional information regarding a specific option when necessary.  
* **Don't:** Avoid linking the entire label as it could cause issues with the selection.

#### Description (optional)   
If additional information about the label is required, a description can be included.  

## Examples

### Label and description 

Radios must always have a label and can also feature a description.

* **Do:** Explain what users should do to use this element effectively.  
* **Don't:** Highlight what users should avoid when using this element.

### Form field

When used in a form, a group of Radios can be wrapped in the Field component to add features like a semantic label, description and help text, validation messages, and more. Visit the Field page for more information.

If using a Radio group outside of a form, follow the instructions in the next demo.

* **Do:** Explain what users should do to use this element effectively.  
* **Don't:** Highlight what users should avoid when using this element.

### Radio group

Radios must be used in multiples.

* **Do:** Explain what users should do to use this element effectively.  
* **Don't:** Highlight what users should avoid when using this element.

### With custom input 

An additional input field can be included within the Radio to allow the user to input a custom response. The custom input within the Radio can include any of the following form components designed to gather user input, including:

* TextInput and TextArea  
* Select  
* Combobox  
* ChipInput  
* Lookup  
* A combination of more than one input  
* **Do:** Display the custom input at the end of a Radio group whenever possible.  
* **Do:** Disable the custom input unless its corresponding Radio is selected.  
* **Don't:** Design a layout where multiple Radios include custom inputs visible simultaneously.

## Technical implementation

## Keyboard navigation

*Incorporate keyboard navigation into a table, detailing the keys for interacting with the component via keyboard. This section will clarify how users can navigate the component using various keyboard shortcuts, and it applies only to components with interactive states.*

| Key | Function |
| :---- | :---- |
| <kbd>Tab</kbd> | The focus is placed on the next interactive element in tab order. |
| <kbd>Shift</kbd> \+ <kbd>Tab</kbd> | The focus is placed on the previous interactive element. |
| <kbd>Up arrow</kbd> / <kbd>Down arrow</kbd> / <kbd>Left arrow</kbd> / <kbd>Right arrow</kbd> | When the focus is placed on a Radio within a group, the arrow keys move the focus between the different Radios and select them. |