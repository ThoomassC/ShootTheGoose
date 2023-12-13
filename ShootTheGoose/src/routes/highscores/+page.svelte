<script lang="ts">
	import type { PageServerData } from '../../../.svelte-kit/types/src/routes/highscores/$types';
	export let data: PageServerData;
	console.log(data);
</script>

<h2>Scores</h2>
<table>
	<thead>
		<tr>
			<th>Nom</th>
			<th>Score</th>
		</tr>
	</thead>
	<tbody>
		{#each data.body.highScores as scores}
			<tr>
				<td>{scores.name}</td>
				<td>{scores.point}</td>
			</tr>
		{/each}
	</tbody>
</table>