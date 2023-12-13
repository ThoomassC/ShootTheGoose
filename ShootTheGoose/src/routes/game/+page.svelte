<script lang="ts">
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

<div class="relative">
    <div class="flex items-center justify-center">
        <h1
            style="font-size: 40px; font-weight: bold;"
        >
            Shoot the Goose !
        </h1>
    </div>

    <a href="../">
        <button
            class="ml-4 align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-full max-w-[150px] h-10 max-h-[90px] rounded-lg text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button">
            {"<- -  "} Quitter la partie
        </button>
    </a>

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
