# Redesigning existing components

This page outlines the steps that collaborators should follow to contribute to the redesign of an existing Atlas component.

![Designing components](../assets/redesigning-existing-components/designing-components.png)

## 1. Report and validate

### 1.1. Define the purpose and scope of this redesign

The redesign of a component should be clearly justified and scoped. There are several scenarios that can motivate the need to redesign a particular component:

**1. A new component variant or property is required**

In this scenario, we may need to create a new component variant or property in order to expand the use cases of the original component (e.g. Message component needs to present a close button so users can dismiss it).

![Redesigning components scenarios 01](../assets/redesigning-existing-components/report-validate-redesigning-components-scenario-01.png)

**2. The component’s visual style needs to be updated**

In this scenario, we may need to change the visual style of the component in order to improve it, or to make it consistent with other system elements (e.g. Button paddings need to be decreased).

![Redesigning components scenarios 02](../assets/redesigning-existing-components/report-validate-redesigning-components-scenario-02.png)

**3. The component’s behavior needs to be improved**

We may want to update the component behaviors for well-justified reasons to improve user-experience (e.g. allow the component to grow in height to accommodate longer text).

![Redesigning components scenarios 03](../assets/redesigning-existing-components/report-validate-redesigning-components-scenario-03.png)

### 1.2. Create a new GitHub Issue

Once the purpose of the component redesign has been defined, a new GitHub Issue will need to be created. Use this [component task template]() to create the new issue. Fill in as much information as possible in the predefined sections.

### 1.3. Review the task with the Design System Team

The new task must be reviewed with the Design System Team (DST) before the design process starts. This will generate understanding of the new use case and effectively validate that this component update is needed. You can also post a comment once the task has been created and ping the DST members to start the conversation.

Once the task is validated with the DST and the need to update the component is clear, you can start designing the updated system component.

## 2. Research and prepare

The designer should start by checking the following resources in order to collect relevant information about the existing component and its current use cases:

- [Atlas component demos](../components/overview.md) and [Atlas Figma library](https://www.figma.com/design/2vheURjyvYg2oyBeuQOxQ1/%F0%9F%92%A0-Atlas---Design-System?m=auto&t=zXhsNI5KObVWIEyg-1): check the current component behaviors and interactions.

Designers should start by analyzing the current component in production and collecting relevant current use cases. This initial inventory-like process will allow designers to understand the component, and to make sure that the new version matches existing production patterns.

Designers should also compare components of the same category or elements with shared characteristics that can influence the design direction.

## 3. Redesign the component

### 3.1. Create a new exploration file

Create a new Figma file to explore the different proposals and versions of the component, so you can share them in the GitHub Issue. You can duplicate this [component exploration template](https://www.figma.com/design/hPQotZwof0YmH68SQDosXx/Component-specs-sheets?m=auto&t=TkiBxNogE37xBPT5-1
) to create your own file. You can also find the existing component in [this Figma folder]() and create a new version's tab with the component's updates.

![A new exploration file in Figma.](../assets/designing-new-components/design-component-create-exploration-file.png)

The following information will be included in the design exploration file:

- **Cover:** contains a title, description, Github issue link and the task owner.
- **Inventory:** collect and analyze the real use cases where the new component is needed.
- **Explorations** (optional): explore component options if needed before starting documentation in the Figma spec.
- **Component specifications**: document the component's specifications, including visual guides and component behaviors. You can duplicate this [specification sheet template](https://www.figma.com/design/hPQotZwof0YmH68SQDosXx/Component-specs-sheets?m=auto&t=TkiBxNogE37xBPT5-1
) to document the component. Save all versions of the component on separate tabs, labeling each with the version (e.g. “v1”), date (e.g. “2022-07-17”), and an icon to indicate its status: final version (✅), archived (📁), or WIP (🛠).

### 3.2. Defining visual styles and interaction

The research phase should allow designers to identify the component’s behavior and its building blocks. The information collected during that period should then be used to support the redefinition of the missing visual and interactive characteristics of said component.

#### Defining the component’s building blocks

It is essential to identify the component’s architecture before diving deeper into defining its new style and functionality. What are the building blocks or smaller elements that build up the component? Are these smaller elements components too? The answer to these questions can generate three scenarios:


1. The component we are redesigning is not built as a composite of different components (e.g. Button), so we’ll update a single element.

![Redesign component scenario 01](../assets/redesigning-existing-components/redesign-component-component-scenario-01.png)


2. The component we are redesigning is built as a composite of different components that already exist (e.g. Combobox, which combines an input and a button). So we’ll consider how the changes affect each one of the component’s building blocks.

![Redesign component scenario 02](../assets/redesigning-existing-components/redesign-component-component-scenario-02.png)


3. The component we are redesigning is built as a composite of different components and **one or more don’t exist** (e.g. Combobox, which combines an input and a button that already exist but needs the menu items to select one option in the dropdown menu).

![Redesign component scenario 03](../assets/redesigning-existing-components/redesign-component-component-scenario-03.png)


::: warning
This scenario will require you to follow the same design process outlined in the [“Designing new components”](./designing-new-components.md) section to **create each one of the missing components**. Each new Atlas component will require a **dedicated component task** and will have its own design specification sheet.
:::

#### Defining the component’s visual style

All system components should follow the visual guidelines defined in our [style guide](../style-guide/overview.html), as reflected by our design tokens.

::: warning
You have to enable the [Atlas Figma library](https://www.figma.com/design/2vheURjyvYg2oyBeuQOxQ1/%F0%9F%92%A0-Atlas---Design-System?m=auto&t=zXhsNI5KObVWIEyg-1) in your Figma file to reuse Atlas’s styles and icons. Learn more about [how to enable Figma libraries](https://help.figma.com/hc/en-us/articles/360038743434#access).
:::

Design tokens can help support the visual definition of components, as they represent pre-made, systematic stylistic decisions applied to specific properties. While designing new system components, keep in mind to reuse the Atlas tokens created in Figma as styles and variables. If you need to use a token that is not documented yet, or you need to apply it in a different context of use, please notify the Design System Team.

Furthermore, components will need to consume only system assets:

- If you need to use iconography in your designs, use a [Material Symbols Rounded](https://fonts.google.com/icons?icon.style=Rounded).

#### Defining the component's interaction

In order to provide a consistent experience, the component’s (new) behavior and interactive states should also follow the system’s design principles and patterns specified in the [Atlas Figma library](https://www.figma.com/design/2vheURjyvYg2oyBeuQOxQ1/%F0%9F%92%A0-Atlas---Design-System?m=auto&t=zXhsNI5KObVWIEyg-1).

When applying design changes to components, remember to:

- Consider **internationalization** needs and make sure that the component remains optimized for the different languages and orientations. Refer to the [Bidirectionality guidelines](../style-guide/bidirectionality.md) for more details.
- Make sure to define the **responsive behavior** of the new version of the component, and to provide examples of its adaptation to different devices/ screen sizes. You should define the component for desktop, tablet landscape, tablet portrait and mobile.
- Research and follow **accessibility** best practices that apply to the typology of the component being defined, and provide keyboard navigation specifications if needed for this new version. Read more about [accessibility principles and resources](../style-guide/accessibility.md).

### 3.3. Redesign the main component in Figma

Once the new visual and/or interactive traits of the component are well defined, you’ll be ready to redesign the [main component](https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma) in the Figma exploration file. This will make it possible for other designers to reuse the new version of the component in different Figma projects.

Depending on the scope of the change, you might need to:

- Create the [Figma variants](https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants): to represent new potential states (default, hover, focus, disabled…) of the component in all platforms (desktop, mobile).
- Define new [component properties](https://help.figma.com/hc/en-us/articles/5579474826519-Create-and-use-component-properties) (these apply to all variants) so the designers can customize the variant and showcase new elements or functionality (e.g. an icon, a new close button), to adjust the component to their use case.
- Apply the right [auto layout](https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout) properties to make sure the component keeps displaying the right resizing behavior and maintains the correct spacing whenever its contents are modified.
- If needed, apply [constraints](https://help.figma.com/hc/en-us/articles/360039957734-Apply-constraints-to-define-how-layers-resize) to define how the component will behave when resized.

Figma provides extensive [resources](https://help.figma.com/hc/en-us) that will help you create flexible and robust components that are reliable and comfortable to reuse by the rest of the design team members. Count on the Design System Team to support you at any step of the process if you find any obstacles working with Figma.

### 3.4. Create the component’s specification sheet

Once the component’s visual style and interactive behavior have been defined in the main component, the component specification sheet will need to be documented. This spec sheet will serve as the foundation for the component's documentation and guide developers in implementing the component updates. You can use this [component specification sheet template](https://www.figma.com/design/hPQotZwof0YmH68SQDosXx/Component-specs-sheets?m=auto&t=TkiBxNogE37xBPT5-1) or find the existing component in [this Figma folder]() to create a new version's tab with the component's updates.

![Specification sheet template in Figma.](../assets/designing-new-components/design-component-figma-spec.png)

The component specification sheet needs to contain the following sections:

1. **Guides:** This section will document the component’s specifications by including any relevant info for developers, such as paddings, sizes, tokens used, or any component used to create this component.
2. **When to use the component (e.g. "When to use accordions"):** Focus on explaining the primary characteristics of the component, detailing when and when not to use it. This section aims to guide users in making informed decisions about using the component within their projects.
3. **Specifications:** Define the component's anatomy using an image with arrows and numerical labels for each one of the component’s elements. The corresponding text will provide detailed explanations for each numbered element in the image, specifying which of those elements are optional and can be hidden within the component. Additionally, outline the component's minimum and maximum requirements, detailing length or element count constraints. Conclude this section with a link to the Figma spec sheet in the library.
4. **Component limitations:** This section will include the minimum and maximum requirements for this component, detailing length or element count constraints.
5. **Bidirectionality:** This section will document how the component will be mirrored for both LTR and RTL. Refer to the Bidirectionality guidelines for more information.
6. **Types** (if needed): Provide details for the different properties or variants of the component, accompanied by clear images representing each one. This section is applicable only to components offering custom properties or various variants.
7. **Interaction states:** Create an image illustrating all interaction states of the component, with each state numbered. A corresponding numbered list will be included below the image, providing names for each state. This section applies only to components with interactive states.
8. **Best practices:** Offer guidance on optimal usage for each component, including both do and don't images with practical examples. Illustrate how users might use the different component variants and properties effectively, and explain how the component can interact with other system elements like icons, colors, or other components.
9. **Content** (if needed): If the new component requires guidelines for content, such as recommended character count or writing recommendations, this section will provide clear instructions to do so. You can include Do and Don’t images for each recommendation.
10. **Keyboard navigation** (if needed): Incorporate keyboard navigation into a table, detailing the keys for interacting with the component via keyboard. This section will clarify how users can navigate the component using various keyboard shortcuts, and it applies only to components with interactive states.

::: info
Make sure the Figma exploration file is within the [Explorations (WIP)](https://www.figma.com/design/hPQotZwof0YmH68SQDosXx/Component-specs-sheets?m=auto&t=TkiBxNogE37xBPT5-1) project in Figma. If you have not already been invited to this project, please request access from a Design System team designer.
:::

### 3.5. Evaluate and iterate

#### Collecting design feedback

Throughout the component design process, it is important to incorporate feedback from Wikimedia’s UX designers, specially from system designers, who will also grant final explicit approval on their proposed design and its specification before moving into the hand-off to development step.

Once the component’s specification sheet has been updated in the design exploration file, it should be shared in the GitHub Issue in order to collect feedback from the Design System Team, other designers, and community members.

The component redesign proposal will be discussed in Phabricator, and it will be iterated on if needed. All the open questions listed in the task and subsequent possible discussions will need to be solved before the component’s design process can be considered done.

::: warning
No component updates or variants can be added to the system without being validated by the Design System Team first. The component designs will need to be reviewed with help from a system designer from the core team. Post a comment in the GitHub Issue and ping them there so they can review the component and track the task.
:::

#### Collecting feedback from users

You can assess the need to test the new version of the component with help from users using your preferred methodology. This will validate to which degree the new behavior and features meet their expectations, and whether it supports them to accomplish the intended task.

A general recommendation is to test components in a realistic context that simulates the component’s most common interaction conditions: in combination with other components (e.g. test input fields in a form set up, create a search scenario to test search fields, etc.).

## 4. Update the guidelines

As some parts of the component are being redesigned, it is necessary to update the existing component’s guidelines to reflect the changes. You can duplicate this [Google Doc template]() to document the component’s guidelines.

![Google Doc template to document the component's guidelines.](../assets/designing-new-components/design-component-guidelines.png)

Follow the sections outlined in the template to structure the guidelines, which will be added to the component's page on the Atlas site. You can use the frames designed in the Figma spec sheet as images to illustrate these guidelines.

::: info
Make sure the Google Doc with the component's guidelines is moved to this [Component Guidelines]() folder in Google Drive. If you don’t have access to this folder, please request it from a Design System designer.
:::

## 5. Hand-off to development

Once the component’s new design has been discussed, iterated on (if needed) and finished, the designer will share the link to the final version of the design specification sheet in the relevant component GitHub Issue, so developers can start implementing the component in Atlas.

The following actions are required:

1. **Link the design specification in the task:** the designer will add the link to the exploration file with the design specification sheet in the description of the GitHub Issue.
2. **Explain the proposal and list what’s being updated:** the designer will explain the proposal in the task description and will clearly list all the things we are updating in this new version of the existing component. It’s important that developers know exactly what is changing in order to save time (e.g. if Button paddings are being updated, list all the paddings and values in the task).
3. **Post a comment:** in addition to link the specification sheet, the designer will post a comment explaining that the task is ready to be implemented, pinging the developer in that comment if possible.
4. **Move task in the board:** the designer will move the task to the next relevant column in the board to indicate that the component can be implemented in Atlas.
5. **Complete the design checklist:** the designer will complete the design checklist in the “Acceptance criteria” section in the task description to indicate which steps in the task were already completed.

We recommend reviewing the component’s interactive and visual specifications with the help from the developers that will tackle its implementation as part of the hand-off step.

Engineers can help detect edge cases and identify potential technological constraints that should be considered during the design process.

## 6. Design sign-off

Once the component has been fully implemented in Atlas, developers will assign the task to the component’s designer (and move the task to the corresponding column if existent) to perform a complete design review of the component.

The component will need to be tested against all its visual and functional specifications: states, properties, minimum and maximum examples, responsiveness, LTR and RTL, etc.

Once the design sign-off has been done, the designer will assign it to QTE and move it to the corresponding QTE sign-off column, so quality assurance testing can be performed as a final check before release.

## 7. Document: Add the updated component to the Atlas Figma library

Once the new version of the component has been implemented and signed-off, it will be ready to be updated in the [Atlas Figma library](https://www.figma.com/design/2vheURjyvYg2oyBeuQOxQ1/%F0%9F%92%A0-Atlas---Design-System?m=auto&t=zXhsNI5KObVWIEyg-1) so that it can be reused in the different design projects.

::: info
In order to avoid problems with our Figma library, designers from the Design System Team will be responsible for adding the updated version of a component to the library and for publishing it. Please ping them in the GitHub Issue once the design exploration file is ready, so they can add the component in the Figma library.
:::
