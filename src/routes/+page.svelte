<script>
	import AtlButton from '$lib/components/atl-button.svelte';
	import AtlCheckbox from '$lib/components/atl-checkbox.svelte';
	import AtlTextInput from '$lib/components/atl-textInput.svelte';
	import AtlLabel from '$lib/components/atl-label.svelte';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<div class="container">
<AtlButton>buton</AtlButton>
<AtlCheckbox>checkbox</AtlCheckbox>
<AtlTextInput />
<AtlLabel />
</div>
<style>
	.container{
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin: 2rem;
		align-items: center;
	}
</style>
