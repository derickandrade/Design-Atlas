# ToggleSwitch

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

A ToggleSwitch enables the user to instantly toggle between on and off states.

## **Overview**

### **When to use ToggleSwitch**

Toggle switches must feature a descriptive label.

Use the ToggleSwitch component only where an instant change in the user-interface based on their assigned action is intended. For non-instant selections and selection groups, use [Checkbox](checkbox.md) instead.

Avoid using a ToggleSwitch to control opposing options like Yes/No.

## **About ToggleSwitch**

ToggleSwitch includes the following elements.

#### Label
The ToggleSwitch must always contain a label, with the text size matching the base font size for consistency with the body text. The label should be short, with text that clearly describes the state being toggled.

* **Do:** Use text formatting like bold and italic sparingly in the label.  
* **Do:** Include standalone links within the label to provide additional information regarding a specific option when necessary.  
* **Don't:** Highlight what users should avoid when using this element.

#### Switch  
Toggle switches make the on and off states visually distinct by using different colors and moving the grabber from left to right and vice versa.

#### Description (optional)  
If additional information about the label is required, a description can be included. 

## Examples

### Single switch

Single switches can be used, such as turning a setting on or off.

In rare cases where the purpose of the ToggleSwitch is made clear in context, a visible label is not necessary.

### Form Field

When used in a form, a single ToggleSwitch or group of ToggleSwitches can be wrapped in the Field component to add features like a semantic label, description and help text, validation messages, and more. Visit the [Field documentation](https://doc.wikimedia.org/codex/latest/components/demos/field.html) for more information.

If using a ToggleSwitch or ToggleSwitch group outside of a form, follow the instructions in the next demo.

* **Do:** Explain what users should do to use this element effectively.  
* **Don't:** Highlight what users should avoid when using this element.

### ToggleSwitch Group

ToggleSwitches can be used in groups.

* **Do:** Use ToggleSwitch groups vertically for a clear and organized layout.

## Technical implementation

## Keyboard navigation

| Key | Function |
| :---- | :---- |
| Tab | It moves the focus to the next ToggleSwitch within a group or to the next interactive element in tab order when the focus is placed on the last ToggleSwitch of a group. |
| Shift \+ Tab | It moves the focus to the previous button within the group or to the previous interactive element when the focus is placed on the first button of the group. |
| Enter / Space | If the focus is placed on the ToggleSwitch, it toggles the switch on and off. |