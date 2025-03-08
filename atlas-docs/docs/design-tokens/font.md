# Font

## Font family

| Token                    | value          |
| ------------------------ | -------------- |
| `font-family-sans-serif` | 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, Helvetica, Arial, sans-serif |

## Font size

| Example      | Token           | PX (rem)       |
| ------------ | -------------- | ---------------- |
| <p style="font-size: var(--font-size-12);"> The quick brown fox jumps over the lazy dog.</p>  | `font-size-12`  | 12px (0.75rem) |
| <p style="font-size: var(--font-size-16);"> The quick brown fox jumps over the lazy dog.</p>  | `font-size-16`  | 16px (1rem)    |
| <p style="font-size: var(--font-size-20);"> The quick brown fox jumps over the lazy dog.</p>  | `font-size-20`  | 20px (1.25rem) |
| <p style="font-size: var(--font-size-24);"> The quick brown fox jumps over the lazy dog.</p>  | `font-size-24`  | 24px (1.5rem)  |
| <p style="font-size: var(--font-size-32);"> The quick brown fox jumps over the lazy dog.</p>  | `font-size-32`  | 32px (2rem)    |
| <p style="font-size: var(--font-size-40);"> The quick brown fox jumps over the lazy dog.</p>  | `font-size-40`  | 40px (2.5rem)  |
| | `font-size-60`  | 60px (3.75rem) |
| | `font-size-76`  | 76px (4.75rem) |
| | `font-size-96`  | 96px (6rem)    |
| | `font-size-120` | 120px (7.5rem) |

## Font weight

| Example      | Token           | Value       |
| ------------ | -------------- | ---------------- |
| <p style="font-weight: var(--font-weight-light);"> The quick brown fox jumps over the lazy dog.</p>  | `font-weight-light`  | light (300) |
| <p style="font-weight: var(--font-weight-regular);"> The quick brown fox jumps over the lazy dog.</p>  | `font-weight-regular`  | regular (400) |
| <p style="font-weight: var(--font-weight-semibold);"> The quick brown fox jumps over the lazy dog.</p>  | `font-weight-semibold`  | semibold (600) |
| <p style="font-weight: var(--font-weight-bold);"> The quick brown fox jumps over the lazy dog.</p>  | `font-weight-bold`  | bold (700) |

## Line height

| Example      | Token           | PX (rem)       |
| ------------ | -------------- | ---------------- |
| <p style="line-height: var(--line-height-header);"> The quick brown fox jumps over the lazy dog.</p>  | `line-height-header`  | 1.25 |
| <p style="line-height: var(--line-height-paragraph); background-color: black;"> The quick brown fox jumps over the lazy dog.</p>  | `line-height-paragraph`  | 1.4 |
| <p style="font-weight: var(--font-weight-semibold);"> The quick brown fox jumps over the lazy dog.</p>  | `font-weight-semibold`  | semibold (600) |

## Paragraph spacing

| Token                        | Value          | PX (rem)       |
| ---------------------------- | -------------- | -------------- |
| `parapgraph-spacing-body-sm` | `dimension-12` | 12px (0.75rem) |
| `paragraph-spacing-body-md`  | `dimension-16` | 16px (1rem)    |

## Text decoration

| Example      | Token           | Value       |
| ------------ | -------------- | ---------------- |
| <p style="text-decoration: var(--text-decoration-none);"> The quick brown fox jumps over the lazy dog.</p>  | `text-decoration-none`  | none |
| <p style="text-decoration: var(--text-decoration-underline);"> The quick brown fox jumps over the lazy dog.</p>  | `text-decoration-underline`  | underline |
| <p style="text-decoration: var(--text-decoration-line-th);"> The quick brown fox jumps over the lazy dog.</p>  | `text-decoration-line-th`  | line-through |

## Text transformation

| Example      | Token           | Value       |
| ------------ | -------------- | ---------------- |
| <p style="text-transform: var(--text-case-none);"> The quick brown fox jumps over the lazy dog.</p>  | `text-case-none`  | none |
| <p style="text-transform: var(--text-case-upper);"> The quick brown fox jumps over the lazy dog.</p>  | `text-case-upper`  | uppercase |
| <p style="text-transform: var(--text-case-cap);"> The quick brown fox jumps over the lazy dog.</p>  | `text-case-cap`  | capitalize |
| <p style="text-transform: var(--text-case-lower);"> The quick brown fox jumps over the lazy dog.</p>  | `text-case-lower`  | lowercase |

<style>
 @import url(_variables.css);
</style>