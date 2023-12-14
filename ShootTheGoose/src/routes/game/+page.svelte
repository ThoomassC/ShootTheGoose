<script lang="ts">
	import { onDestroy } from 'svelte';
	import Animal from '$lib/components/Animal.svelte';
	import {onMount } from 'svelte';
	import Life from '$lib/components/Life.svelte';
  
	let isClient = false;
	onMount(() => {
	  isClient = true;
	});
  </script>
  
  <div class="overflow-hidden">
	<div class="flex items-center justify-center">
	  <h1 style="font-size: 90px; font-weight: bold;">Shoot The Goose</h1>
	</div>
	
	{#if isClient}
	  <Animal baseNameForUrl="oie_vol" />
	{/if}
  </div>
  
  <a href="../">	
	<button
	  class="ml-4 align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-full max-w-[150px] h-10 max-h-[90px] rounded-lg text-xs bg-gray-900 text-white"
	  type="button"
	>
	  {'<- -  '} Quitter la partie
	</button>
  </a>
  
  <Life></Life>
  