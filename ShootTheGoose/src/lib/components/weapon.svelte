<script>
	import { onMount } from 'svelte';

    export const shooting: function;

	let isShooting = false;

	onMount(() => {
		// Gérer l'affichage du tir ici
	});
</script>

<div>
	<button class="bg-red-500 text-white text-center" on:click={shooting}>Tirer</button>
	{#if isShooting}
		<p class="text-red-500 font-bold">Vous avez tiré !</p>
	{/if}
</div>
