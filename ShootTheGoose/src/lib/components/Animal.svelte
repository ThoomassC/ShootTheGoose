<script lang="ts">
	export let type: string;
	export let src: string;
	export let score: number;

	let isShooting = false;

	let randomPosition = getRandomPosition();

	let left = randomPosition.x + 'px';
	let top = randomPosition.y + 'px';

	const audio = new Audio('/sounds/oie.mp3');

	function handleShoot() {
		isShooting = true;
		audio.play();
		score += pointIncrement;
		setTimeout(() => {
			randomPosition = getRandomPosition();
			updateButtonStyle();
		}, 1000);

		switchTheme();
		isFinish = !isFinish;
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

	function handleMouseMove(event: any) {
		const isMouseOverAnimal = event.target && event.target.closest('.animal-container') !== null;

		if (!isShooting && !isMouseOverAnimal) {
			randomPosition = { x: event.clientX, y: event.clientY };
			updateButtonStyle();
		}
	}

	// TODO: Déplacer l'oie aléatoirement toutes les 2 secondes (et augmente en fonction du score)
	setInterval(() => {
		randomPosition = getRandomPosition();
		updateButtonStyle();
	}, 1500);
</script>

{#if !isShooting}
	<button
		style="position: absolute; user-select: none;"
		class="animal-container custom-cursor"
		style:left
		style:top
		on:click={handleShoot}
		on:mousemove={handleMouseMove}
		disabled={isShooting}
	>
		<img src={`/images/${src}`} class="w-28 h-24" alt={type} />
	</button>
{/if}

<style>
	.animal-container {
		transition:
			left 0.5s ease,
			top 0.5s ease;
	}

	.custom-cursor {
		cursor: crosshair;
		/* cursor: url('/images/viseur.cur'), auto; */
	}
</style>
