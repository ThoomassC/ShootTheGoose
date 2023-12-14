<script lang="ts">
	export let actualScore: number;
	$: actualScore;
</script>

<h1 class="text-2xl font-normal text-white">{actualScore}</h1>