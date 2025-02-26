<script>
    export let checked = false;
    export let error = false;
    export let disabled = false;
    export let label = '';
  
    function handleChange() {
      if (!disabled) {
        checked = !checked;
      }
    }
  </script>


<div class="atl-checkbox">
    <input
      type="checkbox"
      bind:checked
      class={error ? 'error' : ''}
      {disabled}
      on:change={handleChange}
    />
    {#if label}
      <label>{label}</label>
    {/if}
  </div>

  <style>
    /*checkbox*/
.atl-checkbox {
    display: flex;
    align-items: center;
    gap: var(--spacing-4);
    width: fit-content;

    input[type="checkbox"] {
        display: flex;
        justify-content: center;
        align-items: center;
        appearance: none;
        height: var(--size-16);
        width: var(--size-16);
        background-color: transparent;
        border-radius: var(--border-radius-4);
        border: var(--border-width-2) solid var(--border-color-base);
        outline: none;
        cursor: pointer;
    
        &:hover {
            background-color: var(--bgn-foreground);
        }
    
        &:checked {
            background-color: var(--bgn-accent);
            border-color: var(--border-color-accent);
    
            &:hover {
                background-color: var(--bgn-accent-hover);
                border-color: var(--color-accent-hover);
            }
    
            &:after {
                content: '';
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                background-image: var(--icon-check);
                background-repeat: no-repeat;
                background-position: center;
            }
        }
    
        &.error {
            border-color: var(--border-color-error);
    
            &:hover {
                background-color: var(--bgn-error);
            }
    
            &:checked {
                background-color: var(--bgn-danger);
                border-color: var(--border-color-error);
        
                &:hover {
                    background-color: var(--bgn-danger-hover);
                    border-color: var(--bgn-danger-hover);
                }
            }
        }
    }
}
  </style>