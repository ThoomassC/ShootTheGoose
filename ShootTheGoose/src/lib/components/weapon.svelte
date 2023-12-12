<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	let isShooting = false;
	const dispatch = createEventDispatcher();

	onMount(() => {
		// Gérer l'affichage du tir ici
	});

	function shoot() {
		isShooting = true;
		// Logique du tir, émettre un événement pour indiquer que l'Animal a été touché
		dispatch('hit');
		setTimeout(() => {
			isShooting = false;
		}, 1000);
	}
</script>

<div>
	<button class="bg-red-500 text-white text-center" on:click={shoot}>Tirer</button>
	{#if isShooting}
		<p class="text-red-500 font-bold">Vous avez tiré !</p>
	{/if}
</div>
