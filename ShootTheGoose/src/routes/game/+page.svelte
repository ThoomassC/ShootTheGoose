<script lang="ts">
	import Animal from '$lib/components/Animal.svelte';
	import Life from '$lib/components/Life.svelte';

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
	import FormPlayer from '$lib/components/FormPlayer.svelte';
	import Score from '$lib/components/Score.svelte';
	import Background from '$lib/components/Background.svelte';
	const imgGoose = 'oie_vol.png';
	const imgUfo = 'ufo.png';
	let currentMonster: string = imgGoose;
	const bgGoose = 'bg1.png';
	const bgUfo = 'bg2.jpeg';
	let currentBg: string = bgGoose;
	let isFinish: boolean;
	let hearts: number;
	let score: number = 900;
	const themeThreshold: number = 1000;
	const pointIncrement: number = 100;
	let isMissed: boolean = false;
		score += pointIncrement;
		switchTheme();
	function switchTheme() {
		if (score >= themeThreshold && !window.document.body.classList.contains('dark-mode')) {
			window.document.body.classList.toggle('dark-mode');
			currentMonster = imgUfo;
			currentBg = bgUfo;
		}
	}
</script>

<Background baseNameForUrl={currentBg}>
  
	let isClient = false;
	onMount(() => {
	  isClient = true;
	});
  </script>
  
  <div class="overflow-hidden">
	<div class="flex items-center justify-center">
		<h1 style="font-size: 60px; font-weight: bold;">Shoot The Goose</h1>
<div class="custom-cursor h-screen">
	<div class="overflow-hidden">
		<div class="flex items-center justify-center">
			<h1 style="font-size: 60px; font-weight: bold;">Shoot The Goose</h1>
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
</div>
<a href="../">
	<button
		on:click={() => {
			if (window.document.body.classList.contains('dark-mode')) {
				window.document.body.classList.toggle('dark-mode');
				currentMonster = imgGoose;
				currentBg = bgGoose;
			}
		}}
		class="ml-4 align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-full max-w-[150px] h-10 max-h-[90px] rounded-lg text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
		type="button"
	  class="ml-4 align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-full max-w-[150px] h-10 max-h-[90px] rounded-lg text-xs bg-gray-900 text-white"
	  type="button"
		class="ml-4 align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-full max-w-[150px] h-10 max-h-[90px] rounded-lg text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
		type="button"
	>
		{'<- -  '} Quitter la partie
	</button>
  </a>
	<Life bind:actualLifes={hearts} {isMissed}></Life>
	<Score bind:actualScore={score}></Score>
</Background>
{#if isFinish}
	<FormPlayer name="test" bind:point={score} {isFinish} />
{/if}
			<Animal baseNameForUrl={currentMonster} dammage={isShooting} />
		<Animal baseNameForUrl={currentMonster} dammage={isShooting} />

<button
	style="z-index: 1; position: absolute;"
	class="animal-container"
	style:left
	style:top
	on:click={handleShoot}
	on:mousemove={handleMouseMove}
	disabled={isShooting}
>
	<Animal baseNameForUrl="oie_vol" dammage={isShooting} />
</button>
<Life></Life>

<style>
	.animal-container {
		transition:
			left 0.5s ease,
			top 0.5s ease;
	}
</style>