# Select

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

A Select is an input with a dropdown menu of predefined, selectable options.

## Overview

### When to use Select

Use the Select component when users need to choose an option from a short, predefined list.

When not to use:

* If users need to be able to select multiple options, use a [Checkbox group](checkbox.md) (for a short list of options) or Multiselect (for a long list).  
* If users need to be able to select a predefined option or enter their own custom value, use Combobox.

### About Select

Select includes the following elements.

#### Default Icon (optional)  
A default icon can be included alongside the default label to visually enhance the Select's purpose.

* **Do:** Use a simple icon that is easily understandable to users.  
* **Do:** Include an icon when the menu items also contain icons.

#### Label  
The Select will display the label of its selected item. If nothing is selected, a default label can be displayed.

* **Do:** The default label text should clearly indicate the kinds of options that follow. Clear & Trustworthy  
* **Don't:** Don't make the default label a part of a sentence that is completed by the options. Translatable

#### Menu  
When the Select is open, a Menu with options is displayed. These options can use all the features of the MenuItem component.

* **Do:** 2–5 menu items are recommended for optimal usability.  
* **Do:** When there are more items, consider setting a visible item limit to enable scrolling.

## Examples

### Basic usage

Menu items must have a value, and can have a label that gets output in the Select component. If no label is provided (like the third menu item in this example), the value will be displayed.

### With icons

The `defaultLabel` and `menuItems` can have icons.

### With custom label display

You can customize how the label of the selected item appears

### With menu groups

You can group `menuItems` to improve organization. Groups can be customized to add a description or an icon.

### Form field

A Select can be wrapped in the Field component to add features like a semantic label, description and help text, validation messages, and more. Refer to the [Field](field.md) page for more information.

### Other features

The Select component has an internal Menu. You can use the following features from Menu in the Select component:

* [Custom menu item display](https://doc.wikimedia.org/codex/latest/components/demos/menu.html#menu-item-display)  
* [Limited height with scrolling](https://doc.wikimedia.org/codex/latest/components/demos/menu.html#with-scrolling-enabled)  
* [Menu groups](https://doc.wikimedia.org/codex/latest/components/demos/menu.html#menu-groups) (demonstrated above)  
* [MenuItem features](https://doc.wikimedia.org/codex/latest/components/demos/menu-item.html)

## Technical implementation

## Keyboard navigation

*Incorporate keyboard navigation into a table, detailing the keys for interacting with the component via keyboard. This section will clarify how users can navigate the component using various keyboard shortcuts, and it applies only to components with interactive states.*

| Key | Function |
| :---- | :---- |
| Down arrow | When the focus is placed on the input, it opens the menu. When the menu is open, it navigates through menu options. If pressed at the last visible option, it scrolls to the next "hidden" menu item. |
| Up arrow | When the focus is placed on the input, it opens the menu. When the menu is open, it navigates through menu options. |
| Enter | It expands and collapses the menu when the focus is placed on the Select. If the focus is placed in any of the options within the menu, the focused option is selected. |
| Esc | This key closes the menu when it is open. |
| Home | Optionally, it moves the focus to the first option. Optionally, in a single-select listbox, selection may also move with focus. Supporting this key is strongly recommended for lists with more than five options. |
| End | Optionally, it moves the focus to the last option. Optionally, in a single-select listbox, selection may also move with focus. Supporting this key is strongly recommended for lists with more than five options. |

