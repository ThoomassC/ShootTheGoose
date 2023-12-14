<script lang="ts">
	import { onDestroy } from 'svelte';
	import Animal from '$lib/components/Animal.svelte';
	import Life from '$lib/components/Life.svelte';
	import Score from '$lib/components/Score.svelte';

	let isShooting = false;
	let isShootingText = false;

	let randomPosition = getRandomPosition();

	let left = randomPosition.x + 'px';
	let top = randomPosition.y + 'px';

	const audio = new Audio('/sounds/oie.mp3');

	let hearts: number;
	let shot: number = 0;
	let score: number = 0;
	const pointIncrement: number = 100;
	let isMissed: boolean = false;

	function handleShoot() {
		isShooting = true;
		audio.play();
		shot++;
		console.log(shot);
		setTimeout(() => {
			isShootingText = true;

			setTimeout(() => {
				isShootingText = false;
				randomPosition = getRandomPosition();
				updateButtonStyle();
			}, 1000);
		}, 1000);
	}

	function getRandomPosition() {
		const positionX = Math.floor(Math.random() * (window.innerWidth - 100));
		const positionY = Math.floor(Math.random() * (window.innerHeight - 100));

		return { x: positionX, y: positionY };
	}

	function updateButtonStyle() {
		left = randomPosition.x + 'px';
		top = randomPosition.y + 'px';
	}

	function handleMouseMove(event) {
		const isMouseOverAnimal = event.target && event.target.closest('.animal-container') !== null;

		if (!isShooting && !isMouseOverAnimal) {
			randomPosition = { x: event.clientX, y: event.clientY };
			updateButtonStyle();
		}
	}

	// Déplacer l'oie aléatoirement toutes les 2 secondes (ou tout autre intervalle souhaité)
	const moveInterval = setInterval(() => {
		randomPosition = getRandomPosition();
		updateButtonStyle();
	}, 2000);

	// Nettoyer l'intervalle lorsque le composant est détruit
	onDestroy(() => {
		clearInterval(moveInterval);
	});
</script>

<div class="overflow-hidden">
	<div class="flex items-center justify-center">
		<h1 style="font-size: 90px; font-weight: bold;">Shoot The Goose</h1>
	</div>

	<button
		style="position: absolute;"
		class="animal-container"
		style:left
		style:top
		on:click={handleShoot}
		on:mousemove={handleMouseMove}
		disabled={isShooting}
	>
		<Animal baseNameForUrl="oie_vol" dammage={isShooting} />
	</button>
</div>
<a href="../">
	<button
		class="ml-4 align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-full max-w-[150px] h-10 max-h-[90px] rounded-lg text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
		type="button"
	>
		{'<- -  '} Quitter la partie
	</button>
</a>

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
<Life bind:actualLifes={hearts} {isMissed}></Life>
<Score bind:actualScore={score} {shot} {pointIncrement}></Score>

<style>
	.animal-container {
		transition:
			left 0.5s ease,
			top 0.5s ease;
	}
</style>