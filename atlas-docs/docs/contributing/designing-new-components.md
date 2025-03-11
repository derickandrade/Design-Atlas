# Designing new components

This page outlines the steps that collaborators should follow in order to contribute a new Atlas component.

![Atlas components collection excerpt](../assets/designing-new-components/designing-components.png)

## 1. Report and validate

### 1.1. Create a new component issue

Once you have validated the need to create a fully new system component, the next step is filing the corresponding new component issue in open issues on GitHub. Use this [new component issue template](https://github.com/Gustavo22Soaresh/Atlas/issues/new?template=-componentname---add--componentname--component-to-atlas.md) to create the issue, and provide as much information as possible in the predefined sections.

This issue will cover the history, use cases, and overall design of the new component, although only
a "minimum viable product" (MVP) version of the component will be built initially. Other issues can
be opened to cover component features that will be implemented after the MVP.

### 1.2. Review the issue with the Design System Team

The new component issue must be reviewed with help from the Design System Team (DST) before the design process starts. This creates shared understanding of the use case and validates that the functionality can only be covered by a new component.

Make sure to add the Design System Team project tag to the issue for visibility. You can also post a comment once the issue has been created and ping the DST members as a way to start the conversation.

Once the issue is validated with the DST and creating the new Atlas component is agreed upon, you can start designing the new component.

## 2. Research and prepare

The designer in charge of creating the new system component should start by checking the following resources in order to collect relevant information and begin defining the new Atlas component:

- [Atlas component demos](../components/overview.md) and [Atlas Figma library](https://www.figma.com/design/2vheURjyvYg2oyBeuQOxQ1/%F0%9F%92%A0-Atlas---Design-System?m=auto&t=zXhsNI5KObVWIEyg-1): verify whether the needed component has already been designed, or whether it can be designed based on or as a combination of any of the existing Atlas elements
- [Style guide](../style-guide/overview): understand the visual foundations of our Design System

Designers should start collecting, analyzing and comparing similar instances (either implemented or designed) of the new component: that is, components of the same category, or elements with shared characteristics that can influence the design direction.

This initial inventory-like process should allow designers to identify the visual building blocks of the new component, and help them understand its states and behavior in context.

## 3. Design the component

### 3.1. Create a new exploration file

Create a new Figma file to explore the different proposals and versions of the new component, so you can share them in the GitHub issue. You can duplicate this [component exploration template](https://www.figma.com/design/hPQotZwof0YmH68SQDosXx/Component-specs-sheets?m=auto&t=TkiBxNogE37xBPT5-1) to create your own file.

![A new exploration file in Figma.]()

The following information will be included in the design exploration file:

- **Cover:** contains a title, description, GitHub issue link and the issue owner.
- **Inventory:** collect and analyze the real use cases where the new component is needed.
- **Explorations** (optional): explore design options if needed before documenting the compponent in the Figma spec.
- **Component specifications**: document the component's specifications, including visual guides and component behaviors in this [specification sheet template](https://www.figma.com/design/hPQotZwof0YmH68SQDosXx/Component-specs-sheets?m=auto&t=TkiBxNogE37xBPT5-1). Document all versions of the component on separate tabs, labeling each with the version (e.g. “v1”), date (e.g. “17/07/2024”), and an icon to indicate its status: final version (✅), archived (📁), or WIP (🛠).

### 3.2. Defining visual styles and interaction

The research phase should allow designers to identify the component’s behavior and building blocks. The information collected during that period should then be used to support the redefinition of the visual and interactive characteristics of said component, this time following the system’s design principles.

**Defining the component’s architecture**

It is essential to identify the new component’s architecture before diving deeper into defining its style and functionality. What are the building blocks or smaller elements that build up the component? Are these smaller elements components too? The answer to these questions can generate three scenarios:

1. The component is built as a combination of elements with their own styles, but exists as a single element (e.g. Button).

![Component architecture scenario 1]()

2. The component is built as a composite of different components that already exist (e.g. Combobox, which combines an input and a button).


![Component architecture scenario 2]()

3. The component is built as a composite of different components, one or more of which haven’t been designed or implemented yet (e.g. Card, which includes a Thumbnail component that requires its own specifications and implementation process).

![Component architecture scenario 3]()


The latter scenario will require you to follow the steps of the design process outlined in this section to **create each one of the individual building blocks** that make up the new component: each sub-component will require the same level of attention, its own exploration file and individual specification sheet. Sub-components will require **dedicated component issues**, and also be added to the design components library separately.

#### Defining the component’s visual style

All system components should follow the visual guidelines defined in our [style guide](../style-guide/overview.html), as reflected by our design tokens, and use system iconography.

::: warning
You have to enable the [Atlas Figma library](https://www.figma.com/design/2vheURjyvYg2oyBeuQOxQ1/%F0%9F%92%A0-Atlas---Design-System?m=auto&t=zXhsNI5KObVWIEyg-1) in your Figma file to reuse Atlas’s styles and icons. Learn more about [how to enable Figma libraries](https://help.figma.com/hc/en-us/articles/360038743434#access).
:::

Design tokens can help support the visual definition of components, as they represent pre-made, systematic stylistic decisions applied to specific properties. While designing new system components, keep in mind to reuse the Atlas tokens created in Figma as styles and variables. If you need to use a token that is not documented yet, or you need to apply it in a different context of use, please notify the Design System Team.

Furthermore, components will need to consume only system assets:

- If you need to use iconography in your designs, use an [Material Symbols](https://fonts.google.com/icons?icon.style=Rounded). 
- If you need to use a OpenStreetMap logo, use one from our [logo assets]().

#### Defining the component’s interaction

In order to provide a consistent experience, the component’s behavior and interactive states should also follow the system’s design principles and patterns documented in the [Atlas Figma library](https://www.figma.com/design/2vheURjyvYg2oyBeuQOxQ1/%F0%9F%92%A0-Atlas---Design-System?m=auto&t=zXhsNI5KObVWIEyg-1). Keep in mind the recommendations provided in the specification sheets and the existing Atlas components demo pages to make sure that the new component follows the existing standards.

The real use case learnings gathered during the Research and prepare phase should also deeply inform the definition of the new component’s interactive states.

When defining the interactive behavior of new system components, keep in mind to:

- Consider **internationalization** needs and make sure the component is optimized for the different languages and orientations. Refer to the [Bidirectionality guidelines](../style-guide/bidirectionality.md) for more details.
- Make sure to define the **responsive behavior** of the component, and to provide examples of its adaptation to different devices/ screen sizes. You should define the component for desktop, tablet landscape, tablet portrait and mobile.
- Research and follow **accessibility** best practices that apply to the typology of the component being defined, and provide keyboard navigation specifications. Read more about [accessibility principles and resources](../style-guide/accessibility.md).

### 3.3. Design the main component in Figma

Once you have enough information to design the initial version of the component, you’ll be ready to create the [main component](https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma) in the Figma exploration file. This will make it possible for other designers to reuse said component in different Figma projects. The main component will also be reused to illustrate the different sections of its specification sheet.

While creating the main component, make sure to:

- Create the [Figma variants](https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants) needed to represent the different states (default, hover, focus, disabled…) in all platforms (desktop, mobile).
- Define the [component properties](https://help.figma.com/hc/en-us/articles/5579474826519-Create-and-use-component-properties) of each variant so the designers can customize the variant, replace instances of other elements it may contain, set the content and use available boolean properties to adjust the component to their use case.
- Apply the right [auto layout](https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout) properties to make the component display the right resizing behavior and maintain the correct spacing whenever its contents are modified.
- Apply [constraints](https://help.figma.com/hc/en-us/articles/360039957734-Apply-constraints-to-define-how-layers-resize) to define how the component will behave when resized.

Figma provides extensive [resources](https://help.figma.com/hc/en-us) that will help you create flexible and robust components that are reliable and comfortable to reuse by the rest of the design team members. Count on the Design System Team to support you at any step of the process if you find any obstacles working with Figma.

### 3.4. Create the component’s specification sheet

Once the component’s visual style and interactive behavior have been defined in the main component, the component specification sheet will need to be created in order to document the component’s behavior. This spec sheet will serve as the foundation for the component's documentation and guide developers in implementing the component. You can use the [component specification sheet template](https://www.figma.com/design/hPQotZwof0YmH68SQDosXx/Component-specs-sheets?m=auto&t=c7iaBtIQmPo56nsG-1) that’s available in the Figma exploration file.

![Specification sheet template in Figma.]()

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
The Figma file specific to the component should be moved to the [Explorations (WIP)](https://www.figma.com/files/1052664678635144083/project/44938429/Explorations-(WIP)?fuid=1291385767832101845) project within the [Design System](https://www.figma.com/files/1052664678635144083/team/1052677095198424468/Design-System?fuid=1042004517503209744) team in Figma. If you have not already been invited to this project, please request access from a Design System team designer.
:::

### 3.5. Evaluate and iterate

#### Collecting design feedback

Throughout the component design process, it is important to incorporate feedback from OSM-NG UX designers, who will also grant final explicit approval on their proposed design and its specification before moving into the hand-off to development step.

Once the new component’s specification sheet has been defined in the design exploration file, it should be shared in the GitHub issue in order to collect feedback from the Design System Team, other designers and community members.

The component proposal will be discussed in GitHub, and it will be iterated on if needed. All the open questions listed in the issue and subsequent possible discussions will need to be solved before the design of the new component can be considered done.

::: warning
No component can be added to the system without being validated by the Design System Team first. The component designs will need to be reviewed with help from a system designer from the core team. Post a comment in the GitHub issue and ping them there so they can review the component and track the issue.
:::

#### Collecting feedback from users

You can assess the need to test new components with help from users using your preferred methodology. This will validate to which degree the new element's behavior and features meet their expectations, and whether it supports them to accomplish the intended issue.

A general recommendation is to test components in a realistic context that simulates the component’s most common interaction conditions: in combination with other components (e.g. test input fields in a form set up, create a search scenario to test search fields, etc.).

## 4. Define the guidelines

After completing the component specification sheet, duplicate this [Google Doc template](https://docs.google.com/document/d/1oVTtBk7ShOKj80dz3CYsd09sC9gBbfpbJ8M_E1zdm6c/edit#heading=h.a76x583bwhh3) to document the component’s guidelines.

![Google Doc template to document the component's guidelines.]()

Follow the sections outlined in the template to structure the guidelines, which will be added to the component's page on the Atlas site. You can use the frames designed in the Figma spec sheet as images to illustrate these guidelines.

::: info
Move the Google Doc for the component guidelines to the [Component Guidelines](https://drive.google.com/drive/u/1/folders/1TMPY6YJzwUUO0vXaIpiEVoImsNeEiDRC) folder in Google Drive. If you don’t have access to this folder, please request it from a Design System designer.
:::

## 5. Hand-off to development

Once the component’s documentation has been discussed, iterated on (if needed) and finished, the designer will share the link to the final version of the design specification sheet and guidelines in the relevant component GitHub issue, so developers can start implementing the component in Atlas.

The following actions are required:

1. **Link the design specification in the issue:** the designer will add the link to the exploration file with the design specification sheet in the description of the GitHub issue.
2. **Post a comment:** in addition to link the specification sheet, the designer will post a comment explaining that the issue is ready to be implemented, pinging the developer in that comment if possible.
3. **Move issue in the board:** move the issue to the next relevant column in the board to indicate that the component can be implemented in Atlas (e.g. “Ready for development”).
4. **Complete the design checklist:** complete the design checklist in the “Acceptance criteria” section in the issue description to indicate which steps in the issue were already completed.

We recommend reviewing the component’s interactive and visual specifications with the help from the developers that will tackle its implementation as part of the hand-off step.

Engineers can help detect edge cases and identify potential technological constraints that should be considered during the design process.

## 6. Design sign-off

Once the component has been fully implemented in Atlas, developers will assign the issue to the component’s designer (and move the issue to the corresponding column if existent) to perform a complete design review of the component.

The component will need to be tested against all its visual and functional specifications: states, properties, minimum and maximum examples, responsiveness, LTR and RTL, etc.

Once the design sign-off has been done, the designer will assign it to quality and test engineering (QTE) and move it to the corresponding QTE sign-off column, so quality assurance testing can be performed as a final check before release.

::: info
Designers will be able to check how components are coming along during the implementation process by accessing the Atlas demo page staged in Netlify. Developers can provide links to the relevant Netlify build for you to provide feedback.
:::

## 7. Document: Add the new component to the Atlas Figma library

Once the component has been implemented and signed-off, it will be ready to be added to the [Atlas Figma library](https://www.figma.com/design/2vheURjyvYg2oyBeuQOxQ1/%F0%9F%92%A0-Atlas---Design-System?m=auto&t=zXhsNI5KObVWIEyg-1) so that it can be reused in the different design projects.

::: info
In order to avoid problems with our Figma library, designers from the Design System Team will be responsible for adding the new component to the library and for publishing it. Please ping them in the GitHub issue once the design exploration file is ready, so they can add the component in the Figma library.
:::