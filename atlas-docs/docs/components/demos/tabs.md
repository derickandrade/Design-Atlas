# Tabs

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

Tabs consist of two or more tab items created for navigating between different sections of content.

## Overview

### When to use Tabs

Use Tabs to navigate between different sections of content on the page. For filtering information on the screen or switching between views, use a ToggleButtonGroup instead. Tabs can be visually styled as framed or quiet (by default). Framed Tabs should only be used when appearing within a box or module.

Avoid using Tabs to structure content meant to be consumed sequentially, like the sections within an article page.

### About Tabs

The Tabs component always contains two or more Tab items. Each Tab will display different sections within the same context. For example, Tabs can display different edit views or topics.

*Tabs includes the following elements.*

#### Selected tab  
Within the Tabs component, only one tab item can be selected at a time.

#### Unselected tab  
The remaining tab items will remain unselected. Users can choose these tabs by clicking on them or navigating to them via the keyboard’s arrow keys.

## Examples

### Basic usage

## Technical implementation

## Keyboard navigatio

| Key | Function |
| :---- | :---- |
| Tab | It moves the focus to the next interactive element in tab order. |
| Shift \+ Tab | It moves the focus to the previous interactive element. |
| Left arrow / Right arrow | When focusing on a Tab item, the arrow keys navigate between the rest of Tab items |