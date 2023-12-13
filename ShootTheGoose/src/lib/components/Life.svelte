<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export const lifesToBeginWith = 3;
	export let actualLifes: number = lifesToBeginWith;
	$: actualLifes;
	export const miss = () => {
		--actualLifes;
		dispatch('heart', { actualLifes });
	};
</script>

<div
	class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
	<div class="flex-row">
		{#each Array(actualLifes) as _}
			<img src="/images/heart.png" alt={_} class="inline max-w-min" />
		{/each}
	</div>
</div>