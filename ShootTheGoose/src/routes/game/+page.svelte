<script>
	import Animal from '$lib/components/Animal.svelte';

	let isShooting = false;
	let isShootingText = false;
	let randomPosition = getRandomPosition();

	function handleShoot() {
		isShooting = true;
		setTimeout(() => {
			isShootingText = true;
			setTimeout(() => {
				isShootingText = false;
				randomPosition = getRandomPosition();
			}, 1000);
		}, 1000);
	}

	function getRandomPosition() {
		const positionX = Math.floor(Math.random() * window.innerWidth);
		const positionY = Math.floor(Math.random() * window.innerHeight);

		return { x: positionX, y: positionY };
	}
</script>

<div class="bg-ground-pattern">
	<h1
		class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black"
	>
		Shoot the Goose !
	</h1>

	{#if isShootingText}
		<p class="text-red-500">Vous avez tiré sur une oie !</p>
	{/if}

	<button
		style="z-index: 1; position: absolute; left: {randomPosition.x}px; top: {randomPosition.y}px;"
		on:click={handleShoot}
		disabled={isShooting}
	>
		<Animal baseNameForUrl="oie_vol" dammage={isShooting} />
	</button>
</div>
