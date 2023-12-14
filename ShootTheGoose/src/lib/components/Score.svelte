<script lang="ts">
	const begin = 0;
	export let actualScore: number = begin;
	export let shot: number;
	export let pointIncrement: number;

	$: if (shot > 0) {
		actualScore += pointIncrement;
	}
</script>

<h1 class="text-2xl font-extrabold text-white">{actualScore}</h1>