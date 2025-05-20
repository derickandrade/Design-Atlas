<script>

    //import person from 'material-symbols/svg/outlined/person.svg'

    export let type = 'default';        
    export let status = 'default';      
    export let state = 'not filled';    
    export let iconLeft = false;
    export let iconRight = false;
    export let placeholder = 'Placeholder';
    export let value = '';
  
    $: htmlType = type === 'default' ? 'text' : type;
    $: isDisabled = state === 'disabled';
    $: isReadOnly = state === 'readOnly';
    $: isError = status === 'error';
  </script>
  
  <div class="atl-input {status} {state} {iconLeft ? 'with-icon-left' : ''} {iconRight ? 'with-icon-right' : ''}">
    {#if iconLeft}
      <span class="icon left"></span>
    {/if}
  
    <input
      type={htmlType}
      bind:value
      class:error={isError}
      placeholder={placeholder}
      disabled={isDisabled}
      readonly={isReadOnly}
    />
  
    {#if iconRight}
      <span class="icon right"></span>
    {/if}
  </div>
  
  <style>
    .atl-input {
      display: inline-flex;
      align-items: center;
      background-color: var(--color-base-transparent);
      font-size: var(--font-size-16);
      width: fit-content;
      border: none;
    }
  
    .atl-input input {
      gap: var(--spacing-8);
      padding: var(--spacing-8) var(--spacing-12) var(--spacing-8) var(--spacing-12);
      border: var(--border-width-04) solid var(--border-color-base);
      border-radius: var(--radius-sm);
      background-color: var(--color-base-transparent);
      width: fit-content;

      font-weight: var(--typography-font-weight-regular);      
      font-size: var(--typography-font-size-16);
      line-height: 125%;
    
    }
  
    .atl-input.with-icon-left input {
      padding-left: var(--spacing-8);
    }
  
    .atl-input.with-icon-right input {
      padding-right: var(--spacing-8);
    }
  
    .atl-input .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      size: 24;
    }
  </style>
  