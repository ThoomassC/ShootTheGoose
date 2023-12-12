<script lang="ts">
	export let baseNameForUrl: string;
	export let damage: boolean;

	let health = 1;

	function handleHit() {
		if (damage) {
			health = 0;
		}
	}
</script>

{#if health !== 0}
	<img src="/images/{baseNameForUrl}.png" on:click={handleHit} />
{/if}
