<script>
	//import person from 'material-symbols/svg/outlined/person.svg'

	export let type = 'default';
	export let status = 'error';
	export let state = 'filled';
	export let iconLeft = false;
	export let iconRight = false;
	export let placeholder = 'Placeholder';
	export let value = '';

	$: htmlType = type === 'default' ? 'text' : type;
	$: isDisabled = status === 'disabled';
	$: isReadOnly = status === 'disabled';
	$: isSuccess = status === 'success';
	$: isError = status === 'error';

	$: isEmptyDisabled =
		type === 'default' &&
		status === 'disabled' &&
		state === 'not filled' &&
		!iconLeft &&
		!iconRight;

	$: isFilledDisabled =
		type === 'default' && status === 'disabled' && state === 'filled' && !iconLeft && !iconRight;

	// Value Print
	function handleInput() {
		console.log('Value:', value);
	}
</script>

<div
	class="atl-input {status} {state} {iconLeft ? 'with-icon-left' : ''} {iconRight
		? 'with-icon-right'
		: ''}"
>
	{#if iconLeft}
		<span class="icon left"></span>
	{/if}

	<input
		type={htmlType}
		bind:value
		on:input={handleInput}
		class:empty-disabled={isEmptyDisabled}
		class:filled-disabled={isFilledDisabled}
		class:success={isSuccess}
		class:error={isError}
		{placeholder}
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

	.atl-input input:hover {
		background: var(--colors-base-transparent);
		border: 1px solid var(--border-color-accent);
	}

	.atl-input input.empty-disabled {
		background: var(--bgn-base);
		border-top: 0.4px solid var(--border-color-base);
	}

	.atl-input input.filled-disabled {
		background: var(--bgn-base);
		color: var(--color-base-hover);
		border-top: 0.4px solid var(--border-color-base);
	}

	.atl-input input.success {
		border: 1px solid var(--border-color-sucess)
	}
	.atl-input input.error {
		border: 1px solid var(--border-color-error)
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