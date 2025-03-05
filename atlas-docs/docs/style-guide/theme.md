# Theme

For documentation on the entire color palette, visit [Colors](/design-tokens/colors.md).

:::tip
Some colors vary between light and dark modes. Use the color mode switcher in the site header to see
the colors in the different modes. Using design tokens rather than raw hex codes will ensure you're
automatically using the right color for the chosen mode.
:::

## Text color
Color tokens applied to text and icons

| Color                                                                             | Token                                          | When to use                      |
| --------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------- |
| <div class="example" style="background-color: var(--color-base);"></div>          | <span class="token">color-base</span>          | Default color of all text styles and icons | 
| <div class="example" style="background-color: var(--color-subtle);"></div>        | <span class="token">color-subtle</span>        | Subtle text/icons that shouldn't be distracting (e.g. subtitles, descriptions) |
| <div class="example" style="background-color: var(--color-emphasized);"></div>    | <span class="token">color-emphasized</span>    | Emphasized text/icons (e.g., Headings) |
| <div class="example" style="background-color: var(--color-base-hover);"></div>    | <span class="token">color-base-hover</span>    | Tertiary buttons text/icons on hover |
| <div class="example" style="background-color: var(--color-disable);"></div>       | <span class="token">color-disable</span>       | Use it for disabled text/icons in interactive elements (e.g. input, form items).|
| <div class="example" style="background-color: var(--color-accent);"></div>        | <span class="token">color-accent</span>        | Active color for accents text and icons |
| <div class="example" style="background-color: var(--color-accent-hover);"></div>  | <span class="token">color-accent-hover</span>  | Hover color of primary text elements |
| <div class="example" style="background-color: var(--color-accent-active);"></div> | <span class="token">color-accent-active</span> | Text on darker backgrounds  |
| <div class="example" style="background-color: var(--color-foreground);"></div>    | <span class="token">color-foreground</span>    | Icons on hover |
| <div class="example" style="background-color: var(--color-inverse);"></div>       | <span class="token">color-inverse</span>       |  Text and icons on darker backgrounds |
| <div class="example" style="background-color: var(--color-link);"></div>          | <span class="token">color-link</span>          |  Links  |
| <div class="example" style="background-color: var(--color-link-active);"></div>   | <span class="token">color-link-active</span>   |  Links active |
| <div class="example" style="background-color: var(--color-link-visited);"></div>  | <span class="token">color-link-visted</span>   | Visited links |
| <div class="example" style="background-color: var(--color-success);"></div>       | <span class="token">color-success</span>       | Success messages and icons |
| <div class="example" style="background-color: var(--color-info);"></div>       | <span class="token">color-info</span>             | Info messages and icons |
| <div class="example" style="background-color: var(--color-warning);"></div>       | <span class="token">color-warning</span>       |  Warning messages and icons  |
| <div class="example" style="background-color: var(--color-error);"></div>         | <span class="token">color-error</span>         | Error messages and icons |

## Background colors
Color tokens applied in backgrounds
| Color                                                                             | Token                                       | When to use                      |
| --------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------- |
| <div class="example" style="background-color: var(--bgn-base);"></div> | <span class="token">bgn-base</span>                    | Base background |
| <div class="example" style="background-color: var(--bgn-surface);"></div> | <span class="token">bgn-surface</span>              | Surface background  |
| <div class="example" style="background-color: var(--bgn-surface-hover);"></div> | <span class="token">bgn-surface-hover</span>  | Hovered menu options, active tertiary buttons |
| <div class="example" style="background-color: var(--bgn-disable);"></div> | <span class="token">bgn-disable</span>              | Disabled background of interactive elements (e.g. button) |
| <div class="example" style="background-color: var(--bgn-accent);"></div> | <span class="token">bgn-accent</span>                | Default accent backgrounds |
| <div class="example" style="background-color: var(--bgn-accent-hover);"></div> | <span class="token">bgn-accent-hover</span>    | Hover accent backgrounds |
| <div class="example" style="background-color: var(--bgn-accent-active);"></div> | <span class="token">bgn-accent-active</span>  | Active accent backgrounds |
| <div class="example" style="background-color: var(--bgn-foreground);"></div> | <span class="token">bgn-foreground</span>        | Foreground background |
| <div class="example" style="background-color: var(--bgn-danger);"></div> | <span class="token">bgn-danger</span>                |  Default danger/error backgrounds |
| <div class="example" style="background-color: var(--bgn-danger-hover);"></div> | <span class="token">bgn-danger--hover</span>   | Hover on danger/error interactive backgrounds  |
| <div class="example" style="background-color: var(--bgn-danger-active);"></div> | <span class="token">bgn-danger--active</span> | Active danger/error backgrounds (e.g. active selected-error checkbox) |
| <div class="example" style="background-color: var(--bgn-info);"></div> | <span class="token">bgn-info</span>                    | Info feedback background |
| <div class="example" style="background-color: var(--bgn-sucess);"></div> | <span class="token">bgn-sucess</span>                | Success feedback background |
| <div class="example" style="background-color: var(--bgn-warning);"></div> | <span class="token">bgn-warning</span>              | Warning feedback backgorund |
| <div class="example" style="background-color: var(--bgn-error);"></div> | <span class="token">bgn-error</span>                  | Error feedbacks backgorund |


## Border colors
Color tokens applied to borders on form items and buttons
| Color                                                                                    | Token                                              | Reference                       |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------- |
| <div class="example border" style="border-color: var(--border-color-base);"></div>       | <span class="token">border-colorbase</span>         | Default for interactive elements, dialogs, menus |
| <div class="example border" style="border-color: var(--border-color-base-hover);"></div> | <span class="token">border-base-color-hover</span> | When interactive elements on hover |
| <div class="example border" style="border-color: var(--border-color-subtle);"></div>     | <span class="token">border-color-subtle</span>     | Dividers and thumbnail borders |
| <div class="example border" style="border-color: var(--border-color-accent);"></div>     | <span class="token">border-color-accent</span>     | Disabled form item borders |
| <div class="example border" style="border-color: var(--border-color-focus);"></div>      | <span class="token">border-color-focus</span>      |  |
| <div class="example border" style="border-color: var(--border-color-info);"></div>       | <span class="token">border-color-info</span>       | <span class="token"></span>  |
| <div class="example border" style="border-color: var(--border-color-success);"></div>    | <span class="token">border-color-success</span>    | <span class="token"></span>  |
| <div class="example border" style="border-color: var(--border-color-warning);"></div>    | <span class="token">border-color-warning</span>    | <span class="token"></span>  |
| <div class="example border" style="border-color: var(--border-color-error);"></div>      | <span class="token">border-color-error</span>      | <span class="token"></span>  |

<style>


    @import url(_variables.css);
        .example {
            width: 3rem;
            height: 3rem;
            border-radius: 0.25rem;
            box-shadow: var(--shadow-sm);
        }

        .border {
                border: var(--border-width-2) solid var(--border-color-base);
                box-shadow: none;
            }

            .token {
            font-family:  ui-monospace, 
             Menlo, Monaco, 
             "Cascadia Mono", "Segoe UI Mono", 
             "Roboto Mono", 
             "Oxygen Mono", 
             "Ubuntu Mono", 
             "Source Code Pro",
             "Fira Mono", 
             "Droid Sans Mono", 
             "Consolas", "Courier New", monospace;
            background-color: var(--gray-200);
            color: var(--pink-500);
            padding: var(--spacing-4);
            border-radius: var(--border-radius-4);
            width: fit-content;
            font-size: var(--font-size-12);
            text-wrap: nowrap;
        }

</style>