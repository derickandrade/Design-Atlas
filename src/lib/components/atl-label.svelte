<script>
	export let state = 'required';
	export let showDescription = true;
	export let label = 'Label';
	export let description = 'Description';

	$: isRequired = state === 'required';
	$: isOptional = state === 'optional';
</script>

<div class="atl-label-container">
	<span class="atl-label-text">
		{label}
		{#if isRequired}
			<span class="required">*</span>
		{/if}
		{#if isOptional}
			<span class="optional">(opcional)</span>
		{/if}
	</span>

	{#if showDescription && description}
		<span class="atl-label-description">{description}</span>
	{/if}
</div>

<style>
	.atl-label-container {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
		width: 119px;
		height: 20px;
	}

	.atl-label-text {
		display: flex;
		flex-direction: row;
		gap: 4px;
		width: 42px;
		height: 20px;
		font-family: Inter;
		font-weight: var(--typography-font-weight-regular);
		font-size: var(--typography-font-size-16);
		line-height: 125%;
		letter-spacing: 0%;
		vertical-align: middle;
		background: var(--color-emphasized);
	}
	.required {
		color: var(--bgn-danger);
	}
	.optional {
		width: 73px;
		height: 20px;
		font-family: Inter;
		font-weight: var(--typography-font-weight-regular);
		font-size: var(--typography-font-size-16);
		color: var(--color-base);
		line-height: 125%;
		letter-spacing: 0%;
		vertical-align: middle;
	}

	.atl-label-description {
		width: 65px;
		height: 17px;
		font-family: Inter;
		font-weight: var(--typography-font-weight-regular);
		font-size: var(--typography-font-size-14);
		font-weight: var(--typography-font-weight-regular);
		font-size: var(--typography-font-size-12);
		color: var(--color-base);
		line-height: 140%;
		letter-spacing: 0%;
		vertical-align: middle;
	}
</style>
