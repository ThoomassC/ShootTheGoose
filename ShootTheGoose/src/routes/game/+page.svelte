<script lang="ts">
	import Animal from '$lib/components/Animal.svelte';
	import { onDestroy } from 'svelte';

	let isShooting = false;
	let isShootingText = false;

	let randomPosition = getRandomPosition();

	let left = randomPosition.x + 'px';
	let top = randomPosition.y + 'px';

	const audio = new Audio('/sounds/oie.mp3');

	function handleShoot() {
		isShooting = true;
		audio.play();
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

<h1
	class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black"
>
	Shoot the Goose !
</h1>

{#if isShootingText}
	<p class="text-red-500">Vous avez tiré sur une oie !</p>
{/if}

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

<style>
	.animal-container {
		transition:
			left 0.5s ease,
			top 0.5s ease;
	}
</style>
