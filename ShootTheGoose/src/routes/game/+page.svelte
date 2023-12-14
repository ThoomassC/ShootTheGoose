<script lang="ts">
	import Animal from '$lib/components/Animal.svelte';
	import Life from '$lib/components/Life.svelte';
	import FormPlayer from '$lib/components/FormPlayer.svelte';
	import Score from '$lib/components/Score.svelte';
	import Background from '$lib/components/Background.svelte';

	const imgGoose = 'oie_vol.png';
	const imgUfo = 'ufo.png';
	const bgGoose = 'bg1.png';
	const bgUfo = 'bg2.jpeg';
	const themeThreshold: number = 10;

	let currentMonster: string = imgGoose;
	let currentBg: string = bgGoose;
	let isFinish: boolean;
	let hearts: number;
	let score: number = 900;
	let isMissed: boolean = false;
	score += pointIncrement;
	switchTheme();
	let isClient = false;

	onMount(() => {
		isClient = true;
	});

	function switchTheme() {
		if (score >= themeThreshold && !window.document.body.classList.contains('dark-mode')) {
			window.document.body.classList.toggle('dark-mode');
			currentMonster = imgUfo;
			currentBg = bgUfo;
		}
	}

	let canard = {
		type: 'canard',
		score: 1,
		src: { currentMonster }
	};

	let ufo = {
		type: 'ufo',
		score: 3,
		src: { currentBg }
	};

	let animals: any[] = [];

	if (animals.length === 0) {
		animals.push(canard, canard, canard);
	}

	setInterval(() => {
		animals.push(canard);
		animals = animals;
	}, 3000);
</script>

<div class="overflow-hidden">
	<Background baseNameForUrl={currentBg}>
		<div class="custom-cursor h-screen">
			<div class="overflow-hidden">
				<div class="flex items-center justify-center">
					<h1 style="font-size: 60px; font-weight: bold;">Shoot The Goose</h1>
				</div>
				{#each animals as { type, score, src }}
					<Animal {type} {score} {src} />
				{/each}
			</div>
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
				class="ml-4 align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-full max-w-[150px] h-10 max-h-[90px] rounded-lg text-xs bg-gray-900 text-white"
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
</div>

<style>
	.animal-container {
		transition:
			left 0.5s ease,
			top 0.5s ease;
	}
</style>
