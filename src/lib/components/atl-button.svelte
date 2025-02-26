<script>
  /**
   * @typedef {Object} Props
   * @property {string} [type]
   * @property {boolean} [disabled]
   * @property {string} [variant] - primary, danger, tertiary, outline
   * @property {boolean} [withIcon]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
	
  let {
    type = "button",
    disabled = false,
    variant = "tertiary",
    withIcon = false,
    children
  } = $props();
	
  </script>
  
  <button
    class={`atl-button ${variant} ${withIcon ? 'with-icon' : ''} ${disabled ? 'disabled' : ''}`}
    type={type}
    disabled={disabled}
  >
    {@render children?.()}
  </button>
  
  <style>
    @import url(../../style/global.css);

    .atl-button { 
    display: inline-flex;
    align-content: center;
    justify-content: center;
    width: fit-content;
    background-color: var(--bgn-accent);
    color: var(--color-inverse);
    padding: var(--spacing-8) var(--spacing-32);
    border: none;
    gap: var(--spacing-4);
    border-radius: var(--border-radius-4);
    font-family: var(--font-family-sans-serif);
    font-weight: var(--font-weight-regular);    
    font-size: var(--font-size-16);
    line-height: 1.1;
    outline: none;
    cursor: var(--cursor-pointer);
    height: var(--dimension-36);
    flex-shrink: 0;

    &:hover {
        background-color: var(--bgn-accent-hover);
    }

    &:active {
        background-color: var(--bgn-accent-active);
        outline: none;
    }

    &.danger {
        background-color: var(--bgn-danger);

        &:hover {
            background-color: var(--bgn-danger-hover);
        }

        &:active {
            background-color: var(--bgn-danger-active);
        }
    }

    &.tertiary {
        padding: var(--spacing-8) var(--spacing-16);
        color: var(--color-base);
        background-color: transparent;
        font-weight: var(--font-weight-semibold, 600);
        
        &:hover {
            background-color: var(--bgn-surface-hover);
        }

        &:active {
            background-color: var(--bgn-surface-hover);
            color: var(--color-base-hover);
        }
    }

    &.outline {
        background-color: transparent;
        border: var(--border-style-accent);
        background-color: transparent;
        font-weight: var(--font-weight-semibold, 600);
        color: var(--color-accent);

        &:hover {
            background-color: var(--bgn-foreground);
        }

        &:active {
            background-color: var(--bgn-accent);
            color: var(--color-inverse);

            border: var(--border-style-accent);
        }
    }

    &.with-icon {
        padding: var(--spacing-8) var(--spacing-24);
    }

    &:disabled,
    &.disabled {
        background-color: var(--bgn-disabled);
        color: var(--color-disabled);
        cursor: not-allowed;
        pointer-events: none;

        &:hover,
        &:active {
            background-color: var(--bgn-disabled);
            color: var(--color-disabled);
        }
    }
}
  </style>
  