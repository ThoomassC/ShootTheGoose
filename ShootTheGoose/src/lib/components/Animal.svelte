<script lang="ts">
	export let baseNameForUrl: string;
	export let dammage: boolean;
</script>

{#if !dammage}
	<img src="/images/{baseNameForUrl}.png" />
{/if}
