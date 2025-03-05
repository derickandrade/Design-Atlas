# About Atlas

Atlas is the design system for OpenStreetMap. Atlas contains the following.

- [**Design tokens**](../design-tokens/overview): for writing styles consistent with the [Atlas Style Guide for OSM](./../style-guide/overview).
- [**Components**](../components/overview): for building usable, accessible, translatable applications.

Atlas features include the following.
- Wide-ranging support for internationalization and global usage.
- Web accessibility baked in.
- Comprehensive browser and device support.

Read our [guiding principles](#guiding-principles) for details.

## Resources

- [**Atlas Figma**](https://www.figma.com/design/2vheURjyvYg2oyBeuQOxQ1/%F0%9F%92%A0-Atlas---Design-System?m=auto&t=zXhsNI5KObVWIEyg-1): design with Atlas components in Figma.
- [**GitHub**](https://github.com/wikimedia/design-Altas): our codebase on GitHub.

## Usage and contributions

Visit [usage](./usage) to learn how to use this library.

If you'd like to contribute, head over to the [contributing section](../contributing/overview) to
learn about ways you can contribute, our processes, and how to develop this library.

## Maintainers

Atlas is maintained by volunteer designers from the University of Brasilia.

## Guiding principles

### Who we're serving

#### Set high accessibility, internationalization, and browser/device coverage standards

Wikimedia intends to serve everyone. We will follow [Wikimedia's accessibility principles](https://design.wikimedia.org/style-guide/design-principles_accessibility.html) and aim to support many languages.

Atlas follows MeidaWiki's [browser support matrix](https://www.mediawiki.org/wiki/Compatibility#Browsers).
Altas supports the subset of the “Modern” support list, with the difference being that only
ES6-compatible browsers are supported. This excludes Internet Explorer 11 and Safari 9 and 10.

Components should be thoughtfully designed and developed to work across device widths.

#### Designed and built for the wider OSM ecosystem

We intend to serve those working both within OSM (core, skins, and extensions) and in the
wider ecosystem, including web-based tools, static web applications, Jamstack applications, and
some of our mobile apps. Platform-agnosticism will enable us to use this library as we continue
expanding this ecosystem.

To keep our code flexible, we will aim to avoid entirely OSM-specific components. When they
can't be avoided, we will clearly denote and separate out the OSM-specific parts.

#### Prioritize developer experience of library users

We want to make building user interfaces straightforward, fast, and enjoyable. We aim to serve users
of varying experience levels and to reduce barriers to onboarding new users. When possible, we will
prefer to house complexity in the library code rather than exposing it to the library user.

### Collaboration principles

#### Transparency

We work in the open and aim to provide consumers as much information as possible about what we're
working on and how we're prioritizing that work.

#### Enable rather than enforce

The Altas maintainers welcome contributions from everyone and wish to collaboratively build
resources to enable others to easily contribute to the library.

#### Knowledge sharing rather than knowledge silos

Contributors should have support and access to resources that allow them to understand and influence
the system's workflows, methodologies, standards, and infrastructure.

### Code design patterns

#### Composition over complexity

Smaller components are easier to understand and more reusable.

#### Clarity over brevity

It's better for code to be easily understandable than to be as short or as clever as possible.

#### Use existing patterns

Sticking to patterns established in the wider front-end community enables more people to contribute.
Following consistent patterns within the library makes the code easier to write, review, and
maintain.