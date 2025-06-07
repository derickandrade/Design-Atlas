<script>
	export let state = 'required';
	export let showDescription = true;
	export let label = 'Label text variavel';
	export let description = 'Description variavel';

	$: isRequired = state === 'required';
	$: isOptional = state === 'optional';
</script>

<div class="atl-label-container">
	<span class="atl-label-text">  <!-- poderia ser class="label" essa classe contem já a tipografia e a cor, verificar atlas.css-->
		{label}
		{#if isRequired}
			<span class="required">*</span> <!--class="color-error"-->
		{/if}
		{#if isOptional}
			<span class="optional">(opcional)</span> <!-- não pegaria o texto normal?-->
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
	}

	.atl-label-text {
		display: flex;
		flex-direction: row;
		gap: var(--spacing-4);
		width: auto;
		height: auto;
		font-weight: var(--font-weight-semibold);
		line-height: var(--line-height-label);
		letter-spacing: 0%;
		vertical-align: middle;
		/*background: var(--color-emphasized);*/ /*remover isso causa problemas quando muda a cor do background */
	} /* Não poderia ter usado a classe com do label no lugar de declarar outra classe somente para o texto */
	.required {
		color: var(--bgn-danger);
	}
	.optional {
		width: 73px;
		height: 20px; /* cudado com declaração de altura e de largura isso pode acabar com a resposividade */
		font-family: Inter;
		font-weight: var(--typography-font-weight-regular);
		font-size: var(--typography-font-size-16);
		color: var(--color-base);
		line-height: 125%;
		letter-spacing: 0%;
		vertical-align: middle;
	}

	.atl-label-description {
		/* desnessario
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
		vertical-align: middle; */
	}
</style>
