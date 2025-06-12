# Label

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

A Label provides a descriptive title for an input or form field.

## Overview

### When to use label

Every input or form field must have an associated label. When creating a form, use the [Field](field.md) component, which contains a Label. When creating an input outside of a form use the Label component.

For more detailed information about form fields, consult the guidelines for [constructing forms](../../style-guide/constructing-forms.md).

### About Label

Label includes the following elements.

#### Label text
A clear and descriptive title for the input tells the user what information to enter.

* **Do:** Keep the label text short, clear, and easy to scan.  
* **Do:** Label text is required, but can be visually-hidden if the context of an input is sufficient to identify it.  
* **Do:** Label text is bold by default, but the label of nested fields should use the regular font weight to make the hierarchy clear.

#### Optional indicator (optional)  
Fields are assumed to be required by default. If a field is optional, it can be labeled as such.

* **Do:** Ensure that the entire word "optional" is displayed for translation purposes.  
* **Don't:** Don't mark required labels with an asterisk.

#### Description (optional)  
The description provides additional information about the field.

## Examples

::: tip TIP
Consider using the [Field](./field.md) component, which includes the Label component and handles accessibility features like ARIA attributes internally. If you need more custom behavior, use the Label component on its own.
:::

### Basic usage

By default, the Label will be visible with the label text styled in bold.

### Visually-hidden label
All inputs need a label to meet accessibility standards. In rare instances, you may not need a visible label if it's very clear from context how to use an input.

### With description

Description text can include markup. Only links and text formatting are recommended as description text should be concise.

* **Do:** Explain what users should do to use this element effectively.  
* **Don't:** Highlight what users should avoid when using this element.

### Label vs. legend

This component outputs a different HTML element depending on whether it is a label for a single input or for a group of inputs. Below are examples of a label and a legend with an associated description.


## Technical implementation

## Keyboard navigation

| Key | Function |
| :---- | :---- |
| <kbd>Enter</kbd> | If the focus is placed on one of the interactive elements within the Label, it activates them. |
