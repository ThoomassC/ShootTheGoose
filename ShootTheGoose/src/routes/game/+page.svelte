<script lang="ts">
	import Animal from '$lib/components/Animal.svelte';
	import Life from '$lib/components/Life.svelte';
	import { afterUpdate, onMount } from 'svelte';

	let canard = {
		type: 'canard',
		score: 1,
		src: 'oie_vol.png'
	};

	//TODO: à gérer en fonction du score
	let extraterrestre = {
		type: 'extraterrestre',
		score: 3,
		src: 'oie_vol.png'
	};

	let animals: any[] = [];

	setInterval(() => {
		animals.push(canard);
		animals = animals;
	}, 2000);
</script>

<div class="overflow-hidden">
	<div class="flex items-center justify-center">
		<h1 style="font-size: 90px; font-weight: bold;">Shoot The Goose</h1>
	</div>
	{#each animals as { type, score, src }}
		<Animal {type} {score} {src} />
	{/each}
</div>
<a href="../">
	<button
		class="ml-4 align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-full max-w-[150px] h-10 max-h-[90px] rounded-lg text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
		type="button"
	>
		{'<- -  '} Quitter la partie
	</button>
</a>

<Life></Life>
