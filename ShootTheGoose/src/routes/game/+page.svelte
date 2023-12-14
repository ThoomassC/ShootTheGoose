<script lang="ts">
	import { onDestroy } from 'svelte';
	import Animal from '$lib/components/Animal.svelte';
	import Life from '$lib/components/Life.svelte';
	import Score from '$lib/components/Score.svelte';
	import Background from '$lib/components/Background.svelte';

	let isShooting = false;
	let isShootingText = false;

	let randomPosition = getRandomPosition();

	let left = randomPosition.x + 'px';
	let top = randomPosition.y + 'px';

	const imgGoose = 'oie_vol.png';
	const bgGoose = 'bg1.png';
	const imgUfo = 'ufo.png';
	const bgUfo = 'bg2.jpeg';
	let actualMonster: string = imgGoose;
	let actualBg: string = bgGoose;

	const audio = new Audio('/sounds/oie.mp3');

	let hearts: number;
	let score: number = 900;
	const themeThreshold: number = 1000;
	const pointIncrement: number = 100;
	let isMissed: boolean = false;

	function handleShoot() {
		isShooting = true;
		audio.play();
		score += pointIncrement;
		setTimeout(() => {
			isShootingText = true;

			setTimeout(() => {
				isShootingText = false;
				randomPosition = getRandomPosition();
				updateButtonStyle();
			}, 1000);
		}, 1000);

		switchTheme();
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

	function switchTheme() {
		if (score >= themeThreshold && !window.document.body.classList.contains('dark-mode')) {
			window.document.body.classList.toggle('dark-mode');
			actualMonster = imgUfo;
			actualBg = bgUfo;
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

<Background baseNameForUrl={actualBg}>
	<div class="bg-cover">
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
				<Animal baseNameForUrl={actualMonster} dammage={isShooting} />
			</button>
		</div>
		<button
			on:click={() => {
				if (window.document.body.classList.contains('dark-mode')) {
					window.document.body.classList.toggle('dark-mode');
					actualMonster = imgGoose;
					actualBg = bgGoose;
				}
			}}
			class="ml-4 align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-full max-w-[150px] h-10 max-h-[90px] rounded-lg text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
			type="button"
		>
			<a href="../">
				{'<- -  '} Quitter la partie
			</a>
		</button>

		<button
			style="z-index: 1; position: absolute;"
			class="animal-container"
			style:left
			style:top
			on:click={handleShoot}
			on:mousemove={handleMouseMove}
			disabled={isShooting}
		>
			<Animal baseNameForUrl={actualMonster} dammage={isShooting} />
		</button>
		<Life bind:actualLifes={hearts} {isMissed}></Life>
		<Score bind:actualScore={score}></Score>
	</div>
</Background>

<style>
	.animal-container {
		transition:
			left 0.5s ease,
			top 0.5s ease;
	}
</style>