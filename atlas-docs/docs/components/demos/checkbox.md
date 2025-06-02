# Checkbox

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

A Checkbox is a binary input that can appear by itself or in a multiselect group. Checkboxes can be selected, unselected or in an indeterminate state.

## Overview

### When to use Checkbox

Checkbox must feature a descriptive label. They may appear alone, such as in a disclaimer, or as a part of a group. A Checkbox may also have sub-options or child Checkboxes.

Use the Checkbox component when you want users to make one or more selections from a list of options. A Checkbox can also be used to accept terms and conditions. Avoid using Checkbox when only one selection is allowed; in such cases, use Radio instead.

#### Checkbox  
The Checkbox’s input makes the selection visually distinct.

* **Do:** Explain what users should do to use this element effectively.  
* **Don't:** Highlight what users should avoid when using this element.

#### Label 
The Checkbox must always contain a label, with the text size matching the base font size for consistency with the body text. Labels can include links and bold text and should be concise, clearly indicating the selected option.

* **Do:** Keep the choices short and mutually exclusive. Concise, Clear & Trustworthy.  
* **Do:** Use text formatting like bold and italic sparingly in the label.  
* **Do:** Include standalone links within the label to provide additional information regarding a specific option when necessary.  
* **Don't:** Avoid linking the entire label as it could cause issues with the selection.

## Examples

### Label and description

Checkboxes must always have a label and can also feature a description.

* **Do:** Explain what users should do to use this element effectively.  
* **Don't:** Highlight what users should avoid when using this element.

### Form field

When used in a form, a single Checkbox or group of Checkboxes can be wrapped in the Field component to add features like a semantic label, description and help text, validation messages, and more. See the Field page for more information.

* **Do:** Create a direct question or a complete sentence to precede the Checkboxes. Translatable & Clear  
* **Don't:** Include inline error messages for both individual and groups of Checkboxes to inform users and guide them in fixing issues.

### Checkbox group

Checkboxes are most typically used in groups.

### Inline Checkboxes

Checkboxes can be horizontally stacked if needed in some specific cases. However, the recommendation is to vertically stack them to maintain visual flow.

* **Do:** Use inline Checkboxes for specific cases to prevent disruptions in the reading flow.  
* **Don't:** Avoid using inline Checkboxes if there are too many Checkboxes per line.

* **Don't:** Avoid using inline Checkboxes if there is significant variation in the length of the Checkbox labels.

### Indeterminate state

In addition to selected and unselected, a Checkbox can be in an indeterminate state. This state is common for checkboxes to present a number of sub-options (which are also checkboxes). If all of the sub-options are checked, the main checkbox will also be checked, and if they're all unchecked, the main checkbox would be unchecked. If any one or more of the sub-options have a different state than the others, the main checkbox would present an indeterminate state checkbox.

* **Do:** Use the indeterminate Checkbox when there is a long list of sub-checkboxes to select.  
* **Do:** Align secondary Checkboxes with the label of the indeterminate Checkbox.

## Technical implementation

## Keyboard navigation

| Key | Function |
| :---- | :---- |
| <kbd>Tab</kbd> | It moves the focus to the next Checkbox within a group or to the next interactive element in tab order. |
| <kbd>Shift</kbd> \+ <kbd>Tab</kbd> | It moves the focus to the previous Checkbox within a group or to the previous interactive element. |
| <kbd>Space</kbd> | If the focus is placed on the Checkbox, it toggles the Checkbox state. |