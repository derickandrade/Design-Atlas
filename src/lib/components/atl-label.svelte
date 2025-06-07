<script>
	export let state = '';
	export let showDescription = false;
	export let label = 'Label';
	export let description = 'Description';

	$: isRequired = state === 'required';
	$: isOptional = state === 'optional';
</script>

<div class="atl-label">
	<span class="label">
		{label}
		{#if isRequired}
			<span style="color: var(--red-500);">*</span>
		{/if}
		{#if isOptional}
			<span class="label regular color-subtle">(opcional)</span>
		{/if}
	</span>

	{#if showDescription && description}
		<span class="label regular color-subtle">{description}</span>
	{/if}
</div>

<style>
	@import url(../../style/global.css);
	.atl-label {
		display: flex;
		flex-direction: column;
		gap: 0px;
		width: fit-content;
	}
</style>
